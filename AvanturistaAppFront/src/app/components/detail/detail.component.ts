import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers/main.reducer';
import { Observable } from 'rxjs';
import { AvanturaService } from '../../services/avantura.service';
import { selectAllComments } from '../../store/entities/komentar.adapter';
import { komentar } from '../../models/komentar';
import { filter, flatMap, map } from 'rxjs/operators';
import { Avantura } from 'src/app/models/avantura';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  avanture:Avantura;
  isMyAvantura:boolean;
  alreadyLeftAComment:boolean;
  comments:Observable<komentar[]>
  user:User;

  constructor(
    private route:ActivatedRoute,
    private store:Store<State>) { 
      this.isMyAvantura=false;
      this.alreadyLeftAComment=false;
    }

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      const id=params['id'];
      console.log(id);
      this.store.select(store=>store.avanture.entities[id])//?store.avanture.entities[id]:null)
      .subscribe(adv=>{this.avanture=adv;
      console.log(adv)});
    })

    this.comments=this.store.select(selectAllComments);

    this.store.select(state=>state.auth.user).subscribe(user=>this.user=user);
    // if(this.avanture){
    // // if(this.mojaAvantura(this.user,this.avanture.id)){
    // //   this.isMyAvantura=true;
    // }
    this.commentsForThisAvantura(this.comments,this.avanture.id);
    this.didILeaveComment(this.user,this.comments);

  }

  // mojaAvantura(user:User,id:number){
  //     return user.poseceno.includes(id);
  // }

  commentsForThisAvantura(comments:Observable<komentar[]>,avanturaId:number){
    this.comments=comments.pipe(
      map(comments=>comments.filter(comment=>comment.avanturaId===avanturaId))
    )
  }

  didILeaveComment(user:User,comments:Observable<komentar[]>){
    comments.pipe(
      flatMap(comments=>comments),
    ).subscribe(comment=>{
      if(user.komentari.includes(comment.id)){
        this.alreadyLeftAComment=true;
      }
    })
  }

}
