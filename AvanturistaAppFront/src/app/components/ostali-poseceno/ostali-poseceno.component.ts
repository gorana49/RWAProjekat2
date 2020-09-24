import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
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
  constructor(private userService:UserService,private http:HttpClient, private store:Store<State>) { 
    this.isReadyForDrawing = false;
  }

  ngOnInit(): void {
    this.userService.GetUsers().pipe(
      filter(val => val !== undefined && val !==null),).subscribe(users=>{
      this.users = users;
      this.store.select(store=> store.auth).pipe(
        filter(val => val !== undefined && val !==null)).subscribe(user=> {
          let index = this.users.indexOf(user.user);
          this.users.splice(index-1);
          console.log(this.users);
          this.store.select(selectAllAdventure).pipe(
            filter(val => val !== undefined && val !==null),).subscribe(adventure =>
              {
                this.adventures=adventure;
                this.users.forEach(user=>
                {
                  user.visited.forEach(avantura=>
                    {
                      this.adventures.forEach(el=>{
                        if(el.id === avantura)
                          this.myAdventures.push(el);
                    })})
                    this.userAdventure = new UserAdventures( user.id, user.username,this.myAdventures);
                    this.myAdventures = [];
                    this.userAdventures.push(this.userAdventure);
                })})});
        });
      
  }; 
}
