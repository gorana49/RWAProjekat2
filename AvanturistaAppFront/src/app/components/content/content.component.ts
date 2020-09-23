import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadAllAdventures } from 'src/app/store/actions/adventures.actions';
import { LoadAllComments } from 'src/app/store/actions/komentar.actions';
import { State } from 'src/app/store/reducers/main.reducer';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  displayLogIn:boolean; 
  displayRegister:boolean;

  constructor(private store:Store<State>) {
    this.displayLogIn = false;
    this.displayRegister=false;
  }
  ngOnInit(): void {
    this.store.dispatch(new LoadAllAdventures());
    this.store.dispatch(new LoadAllComments());
    localStorage.clear();
  }

  showLogInModal(): void {
    this.displayLogIn = true;
  }
  showRegisterModal():void{
    this.displayRegister = true;
  }
  hideLogInModal(): void {
    this.displayLogIn = false;
  }
  hideRegisterModal(): void {
    this.displayRegister = false;
  }
}
