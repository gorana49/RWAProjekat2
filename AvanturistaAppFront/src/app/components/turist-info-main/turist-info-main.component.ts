import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AdventureState, selectAllAdventure } from 'src/app/store/entities/avantura.adapter';
import { Adventure } from 'src/app/models/adventure';
import { LoadUser, UserLogout } from 'src/app/store/actions/user.actions';
import { User } from 'src/app/models/user';
import { identifierModuleUrl } from '@angular/compiler';
import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Dictionary } from '@ngrx/entity';
import { concatAll } from 'rxjs/operators';

@Component({
  selector: 'app-turist-info-main',
  templateUrl: './turist-info-main.component.html',
  styleUrls: ['./turist-info-main.component.css']
})
export class TuristInfoMainComponent implements OnInit {
  constructor(private store:Store<AdventureState>,
              private router: Router) {}
  collapseMenu() {
    (document.getElementById('sidebar') as HTMLElement).classList.toggle('active');
  }
 
  ngOnInit() { 
    this.store.dispatch(new LoadUser(Number(localStorage.getItem("Id"))))
  }

  logout()
  {
    this.store.dispatch(new UserLogout());
    localStorage.clear();
    this.router.navigate(['/content']);
  }
}
