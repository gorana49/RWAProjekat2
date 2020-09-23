import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './store/reducers/main.reducer';
import { LoadAllAdventures } from './store/actions/adventures.actions';
import { LoadAllComments } from './store/actions/komentar.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AvanturistaAppFront';
  constructor() {
  }

 ngOnInit(){
    //  this.store.dispatch(new LoadAllAdventures());
    //  this.store.dispatch(new LoadAllComments());
 }
}
