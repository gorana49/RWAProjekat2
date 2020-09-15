import { Component, OnInit } from '@angular/core';
import { AvanturaState, selectAllAvanture } from 'src/app/store/entities/avantura.adapter';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Dictionary } from '@ngrx/entity';
import { Avantura } from 'src/app/models/avantura';
import { User } from 'src/app/models/user';
import { LoadUser } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-pregled-avantura',
  templateUrl: './pregled-avantura.component.html',
  styleUrls: ['./pregled-avantura.component.css']
})
export class PregledAvanturaComponent implements OnInit {
  constructor(private store:Store<AvanturaState>,
    private router: Router) {}
  avanture$:Observable<Avantura[]>;
  ngOnInit(): void {
    this.avanture$=this.store.select(selectAllAvanture);
    if(localStorage.getItem("auth.loggedIn")!=="true"){
      this.router.navigate(['/content'])
    }
  }

}
