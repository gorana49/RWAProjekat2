import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers/main.reducer';
import { Observable } from 'rxjs';
import { AdventureService } from '../../services/avantura.service';
import { selectAllComments } from '../../store/entities/komentar.adapter';
import { Comment } from '../../models/komentar';
import { filter, flatMap, map } from 'rxjs/operators';
import { Adventure } from 'src/app/models/adventure';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  adventure:Adventure;
  isMyAvantura:boolean;
  alreadyLeftAComment:boolean;
  comments:Observable<Comment[]>
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
       
      console.log('id', id);
      this.store.select(store=> {
        console.log(store);
        return store.adventures.entities[id] 
      }
        ).pipe( filter(val => val != undefined) )
      .subscribe(adv=>{
        this.adventure=adv;
        console.log('a', adv)
        
        this.comments=this.store.select(selectAllComments);

        this.store.select(state=>state.auth.user).subscribe(user=>this.user=user);
        this.commentsForThisAvantura(this.comments,this.adventure.id);
        this.didILeaveComment(this.user,this.comments);
      });
    })
  }

  commentsForThisAvantura(comments:Observable<Comment[]>,avanturaId:number){
    this.comments=comments.pipe(
      map(comments=>comments.filter(comment=>comment.adventureId===avanturaId))
    )
  }

  didILeaveComment(user:User,comments:Observable<Comment[]>){
    comments.pipe(
      flatMap(comments=>comments),
    ).subscribe(comment=>{
      if(user.komentari.includes(comment.id)){
        this.alreadyLeftAComment=true;
      }
    })
  }

}
