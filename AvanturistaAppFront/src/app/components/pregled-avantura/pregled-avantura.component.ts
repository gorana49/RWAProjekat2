import { Component, OnInit } from '@angular/core';
import { AdventureState, selectAllAdventure } from 'src/app/store/entities/avantura.adapter';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Dictionary } from '@ngrx/entity';
import { Adventure } from 'src/app/models/adventure';
import { User } from 'src/app/models/user';
import { LoadUser } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-pregled-avantura',
  templateUrl: './pregled-avantura.component.html',
  styleUrls: ['./pregled-avantura.component.css']
})
export class PregledAvanturaComponent implements OnInit {
  constructor(private store:Store<AdventureState>,
    private router: Router) {}
  avanture$:Observable<Adventure[]>;
  ngOnInit(): void {
    this.avanture$=this.store.select(selectAllAdventure);
    if(localStorage.getItem("LoggedIn")!=="true"){
      this.router.navigate(['/content'])
    }
  }

}
