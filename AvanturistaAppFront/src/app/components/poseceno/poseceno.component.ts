import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { Adventure } from 'src/app/models/adventure';
import { User } from 'src/app/models/user';
import { AdventureService } from 'src/app/services/avantura.service';
import { selectAllAdventure } from 'src/app/store/entities/avantura.adapter';
import { State } from 'src/app/store/reducers/main.reducer';

@Component({
  selector: 'app-poseceno',
  templateUrl: './poseceno.component.html',
  styleUrls: ['./poseceno.component.css']
})
export class PosecenoComponent implements OnInit,OnDestroy {
  isClickedAddAdventure:boolean;
  user:User;
  advInit:Adventure;
  adventures:Observable<Adventure[]>;
  possibleAdventures:Adventure[]=[];
  filteredAdventures:Adventure[]=[];
  destoryer$ = new Subject<void>();
  _inputFilter:string;
  get inputFilter(){
    return this._inputFilter;
  }
  set inputFilter(value:string){
    this._inputFilter = value;
    this.filteredAdventures = this.inputFilter ? this.filterAdventures(this.inputFilter):this.possibleAdventures;
  }
  constructor(private store:Store<State>) {
    this.isClickedAddAdventure = false;
    this.advInit = new Adventure();
    this.filteredAdventures.push(this.advInit);
   }
  ngOnDestroy(): void {
    this.destoryer$.next(null);
  }
  ngOnInit() {
    this.store.select(store=> store.auth.user).pipe(
      filter(val => val !== undefined && val !==null),
      takeUntil(this.destoryer$)).subscribe(user=> 
     {
      this.user =user;
      this.adventures = this.store.select(selectAllAdventure);
      this.adventuresForThisUser(this.adventures);
      this.adventures.subscribe(adventure=>{
        this.possibleAdventures = adventure;
      })
     });
  }
  adventuresForThisUser(adventures:Observable<Adventure[]>){
    this.adventures = adventures.pipe(
      map(adventures=> adventures.filter(adventure => this.user.visited.includes(adventure.id) ===false)),
    );
  }
  addVisitedAdventure()
  {
    this.isClickedAddAdventure = true; 
  }

  filterAdventures(filterBy:string)
  {
    filterBy = filterBy.toLocaleLowerCase();
    return this.possibleAdventures.filter((adventure:Adventure)=>
     // adventure.duration.toLocaleLowerCase().indexOf(filterBy)!==-1 || 
      adventure.location.toLocaleLowerCase().indexOf(filterBy)!== -1)
  }
  addInVisited()
  {

  }
}
