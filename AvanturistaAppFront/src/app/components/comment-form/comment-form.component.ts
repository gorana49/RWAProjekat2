import { Component, OnInit,Input } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import {AddComment} from '../../store/actions/komentar.actions'
import { Store } from '@ngrx/store';
import {KomentariState,selectTotalComments} from '../../store/entities/komentar.adapter'
import {komentar} from '../../models/komentar'
import {UpdateAvanturu} from '../../store/actions/avanture.actions'
import { State } from 'src/app/store/reducers/main.reducer';
import { DodajKomentar } from '../../store/actions/user.actions'
import { Avantura } from 'src/app/models/avantura';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  @Input()
  avantura:Avantura;

  numberOfEntities:number;
  emptyField:boolean;
  myComment:komentar;
  user:User;

  userComment=new FormGroup({
    comment:new FormControl(''),
  })

  constructor(private store:Store<State>) { 
    this.emptyField=true;
  }

  ngOnInit() {
    this.store.select(selectTotalComments)
    .subscribe(numberOfComments=>this.numberOfEntities=numberOfComments);
    this.store.select(state=>state.auth.user).subscribe(user=>{this.user=user
    console.log(this.user);});
  }

  onSubmit(){
    if(!this.handleError()){
      this.myComment={
        id:this.numberOfEntities+1,
        avanturaId:this.avantura.id,
        datumObjave:new Date().getTime().toString(),
        username:this.user[0].username,
        comment:this.userComment.value.comment,
      }

      this.store.dispatch(new UpdateAvanturu(this.avantura))
      this.store.dispatch(new AddComment(this.myComment))

      this.user.komentari.push(this.numberOfEntities+1);
      this.store.dispatch(new DodajKomentar(this.user))

    }else{
      this.emptyField=false;
    }
  }

  handleError(){
    if(this.userComment.value.comment.length===0)
    return true;

    return false;
  }
}