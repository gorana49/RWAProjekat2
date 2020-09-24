import { OnDestroy } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { Adventure } from 'src/app/models/adventure';
import { User } from 'src/app/models/user';
import { DeleteAdventure, UpdateAdventure } from 'src/app/store/actions/adventures.actions';
import {UpdateMyAdventure } from 'src/app/store/actions/user.actions';
import { selectTotalAdventures } from 'src/app/store/entities/avantura.adapter';
import { State } from 'src/app/store/reducers/main.reducer';


@Component({
  selector: 'app-avantura',
  templateUrl: './avantura.component.html',
  styleUrls: ['./avantura.component.css']
})
export class AvanturaComponent implements OnInit, OnDestroy {
  numberOfEntities:number;
  user:User;
  destoryer$ = new Subject<void>();
  @Input()
  adventure:Adventure;
  constructor(private store:Store<State>,private router: Router) { }
  ngOnDestroy(): void {
    this.destoryer$.next(null);
  }
  ngOnInit(): void {
    this.store.select(selectTotalAdventures).pipe(
    filter(val => val !== undefined && val !==null), takeUntil(this.destoryer$))
     .subscribe(numberOfAvanture=>this.numberOfEntities=numberOfAvanture);
      this.store.select(state=>state.auth).pipe(
        filter(val => val !== undefined && val !==null),).subscribe(user=>{
         this.user = new User(user.user);
      })
  }
  deleteAdventure()
  {
    if(this.user)
    {
    this.user.visited = [...this.user.visited, this.numberOfEntities];
    this.user.visited.forEach((el,ind) => {
      if(el === this.adventure.id)
       this.user.visited.splice(ind);   
    });
    
    this.store.dispatch(new UpdateMyAdventure(this.user));

    this.store.dispatch(new DeleteAdventure(this.adventure.id));
    this.router.navigate([`/${this.user.role}`]);
    }
  }

  navigateToAdventureDetail()
  {
    if(this.user)
    {
      this.router.navigate([`/${this.user.role}/detail/${this.adventure.id}`])
    }
  }

}
