import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './store/reducers/main.reducer';
import { UcitajSveAvanture } from './store/actions/avanture.actions';
import { LoadAllComments } from './store/actions/komentar.actions';
import { LoadUser } from './store/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AvanturistaAppFront';
  constructor(private store:Store<State>) {
  }

 ngOnInit(){
     this.store.dispatch(new UcitajSveAvanture());
     this.store.dispatch(new LoadAllComments());
    //  if(localStorage.getItem("auth.loggedIn")==="true"){
    //    this.store.dispatch(new LoadUser(Number(localStorage.getItem("id"))))
 }
}
