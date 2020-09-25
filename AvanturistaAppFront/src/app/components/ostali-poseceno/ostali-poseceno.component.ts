import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Adventure } from 'src/app/models/adventure';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { selectAllAdventure } from 'src/app/store/entities/avantura.adapter';
import { State } from 'src/app/store/reducers/main.reducer';
import {UserAdventures} from '../../models/user-adventures'

@Component({
  selector: 'app-ostali-poseceno',
  templateUrl: './ostali-poseceno.component.html',
  styleUrls: ['./ostali-poseceno.component.css']
})
export class OstaliPosecenoComponent implements OnInit {
  users:User[]=[];
  adventures: Adventure[] = [];
  userAdventure: UserAdventures;
  userAdventures: UserAdventures[] = [];
  myAdventures:Adventure[] = [];
  isReadyForDrawing:boolean;
  constructor(private userService: UserService, private store: Store<State>) { 
    this.isReadyForDrawing = false;
  }

  ngOnInit(): void {
    combineLatest([ 
      this.userService.getUsers(),
      this.store.select(store => store.auth).pipe(filter( auth =>auth.user===undefined)),
      this.store.select(selectAllAdventure)
    ]).subscribe(value => {
      this.users = value[0];
      this.users = this.users.filter(u => u.id != value[1].user.id);
      this.adventures = value[2];
      this.userAdventures = this.users.map(usr => {
        const userAdvantures = new UserAdventures( 
          usr.id, 
          usr.username,
          this.adventures.filter( adv => usr.visited.includes(adv.id) === true)
        );
        return userAdvantures;
    });
  });
      
  }
}; 

