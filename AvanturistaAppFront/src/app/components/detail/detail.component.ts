import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers/main.reducer';
import { combineLatest, Observable, pipe, Subject } from 'rxjs';
import { AdventureService } from '../../services/avantura.service';
import { selectAllComments } from '../../store/entities/komentar.adapter';
import { Comment } from '../../models/komentar';
import { filter, flatMap, map, takeUntil } from 'rxjs/operators';
import { Adventure } from 'src/app/models/adventure';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {

  adventure:Adventure;
  isMyAvantura:boolean;
  comments:Observable<Comment[]>;
  user:User;
  destoryer$ = new Subject<void>();
  adventureId: number = -1;
  constructor(
    private route:ActivatedRoute,
    private store:Store<State>) { 
      this.isMyAvantura=false;
    }

  ngOnDestroy(): void {
    this.destoryer$.next(null);
  }

  ngOnInit() {
    
    this.route.params.subscribe((params:Params) => {
      this.adventureId = +params['id'];
    });

    this.store.select(store => store.adventures.entities[this.adventureId]).pipe( 
        filter(val => val !== undefined && this.adventureId !== -1),
        takeUntil(this.destoryer$)
      )
    .subscribe(adv => {
      this.adventure = adv;
      this.store.select(state => state.auth.user).pipe(
        takeUntil(this.destoryer$)
        ).subscribe(user=> { 
        this.user=user;
        this.comments=this.store.select(selectAllComments);
        this.commentsForThisAvantura(this.comments, this.adventure.id);
      });
    });
  }

  commentsForThisAvantura(comments:Observable<Comment[]>, avanturaId:number){
    this.comments = comments.pipe(
      map(comments=> comments.filter(comment => comment.adventureId === avanturaId)),
    );
  }

}
