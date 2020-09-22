import { Component, OnInit,Input } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import {AddComment} from '../../store/actions/komentar.actions'
import { Store } from '@ngrx/store';
import {CommentState,selectTotalComments} from '../../store/entities/komentar.adapter'
import {Comment} from '../../models/komentar'
import {UpdateAdventure} from '../../store/actions/adventures.actions'
import { State } from 'src/app/store/reducers/main.reducer';
import { DodajKomentar } from '../../store/actions/user.actions'
import { Adventure } from 'src/app/models/adventure';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  @Input()
  adventure:Adventure;

  numberOfEntities:number;
  emptyField:boolean;
  myComment:Comment;
  user:User;

  userComment=new FormGroup({
    comment:new FormControl('')
  })

  constructor(private store:Store<State>) { 
    this.emptyField=true;
  }

  ngOnInit() {
    this.store.select(selectTotalComments)
    .subscribe(numberOfComments=>this.numberOfEntities=numberOfComments);
    this.store.select(state=>state.auth.user).subscribe(user=>{this.user= new User(user)
    console.log(this.user);});
  }

  onSubmit(){
    if(!this.handleError()){
      this.myComment={
        id:this.numberOfEntities+1,
        adventureId:this.adventure.id,
        publish:new Date().getTime().toString(),
        username:this.user.username,
        comment:this.userComment.value.comment,
      }
      this.user.komentari = [...this.user.komentari, this.numberOfEntities+1];

      this.store.dispatch(new UpdateAdventure(this.adventure))
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