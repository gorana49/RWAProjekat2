import { Component, OnInit } from '@angular/core';
import { Adventure } from 'src/app/models/adventure';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AdventureService } from 'src/app/services/avantura.service';
import { selectTotalAdventures } from 'src/app/store/entities/avantura.adapter';
import { Store} from '@ngrx/store';
import { Router } from '@angular/router';
import { State } from 'src/app/store/reducers/main.reducer';
import { IUser, User } from 'src/app/models/user';
import { UpdateMyAdventure, UpdateMyAdventureSuccess } from 'src/app/store/actions/user.actions';
import {AddAdventure, AddAdventureSuccess, UpdateAdventure} from '../../store/actions/adventures.actions'
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-dodaj-avanturu',
  templateUrl: './dodaj-avanturu.component.html',
  styleUrls: ['./dodaj-avanturu.component.css']
})

export class DodajAvanturuComponent implements OnInit {
  newAvantura:Adventure;
  numberOfEntities:number;
  user:User;
  adventure:FormGroup;
  constructor( private store:Store<State>,private router: Router, private fb: FormBuilder) { 
    this.adventure = this.fb.group({
      title: ['', Validators.required],
      location: '',
      level: '',
      duration: '',
      description: ''
    });
  }

  ngOnInit(): void {
     this.store.select(selectTotalAdventures)
     .subscribe(
       numberOfAvanture=> { console.log('no', numberOfAvanture); this.numberOfEntities=numberOfAvanture; }
       );
       this.store.select(state=>state.auth).pipe(filter(val => val !== undefined )).subscribe(auth=>{
          this.user = new User(auth.user);
       })
  }
  onSubmit(){
          this.newAvantura={
            id:0,
            title:this.adventure.value.title,
            location:this.adventure.value.location,
            level:this.adventure.value.level, 
            duration:this.adventure.value.duration,
            isAvailable:true,
            description:this.adventure.value.description,
          }
          if(this.user)
          {
          this.user.visited = [...this.user.visited, this.numberOfEntities+1];
          this.store.dispatch(new AddAdventure(this.newAvantura));
          this.store.dispatch(new UpdateMyAdventure(this.user));
          this.router.navigate(['/turistInfo']);
          }
   }
}
