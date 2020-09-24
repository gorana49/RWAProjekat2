import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { filter, map, takeUntil } from 'rxjs/operators';
import { Adventure } from 'src/app/models/adventure';
import { User } from 'src/app/models/user';
import { selectAllAdventure } from 'src/app/store/entities/avantura.adapter';
import { State } from 'src/app/store/reducers/main.reducer';

@Component({
  selector: 'app-prosecne-cene',
  templateUrl: './prosecne-cene.component.html',
  styleUrls: ['./prosecne-cene.component.css']
})
export class ProsecneCeneComponent implements OnInit,OnDestroy {
  user:User;
  adventures: Observable<Adventure[]>;
  destoryer$ = new Subject<void>();
  constructor(private store:Store<State>) { }
  ngOnDestroy(): void {
    this.destoryer$.next(null);
  }

  ngOnInit(): void {

    this.store.select(store=> store.auth).pipe(
        filter(val => val !== undefined && val !==null),
        takeUntil(this.destoryer$)).subscribe(user=> 
       {
        this.user = new User(user.user);
        this.adventures = this.store.select(selectAllAdventure);
        this.adventuresForThisUser(this.adventures);
       });
  }

  adventuresForThisUser(adventures:Observable<Adventure[]>){
    this.adventures = adventures.pipe(
      map(adventures=> adventures.filter(adventure => this.user.visited.includes(adventure.id) ===true)),
    );
  }
}
