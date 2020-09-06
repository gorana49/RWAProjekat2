import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AvanturaState, selectAllAvanture } from 'src/app/store/entities/avantura.adapter';
import { Avantura } from 'src/app/models/avantura';
import { LoginUser } from 'src/app/store/actions/user.actions';
import { User } from 'src/app/models/user';
import { identifierModuleUrl } from '@angular/compiler';
import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Dictionary } from '@ngrx/entity';

@Component({
 // selector: 'app-turist-info-main',
  templateUrl: './turist-info-main.component.html',
  styleUrls: ['./turist-info-main.component.css']
})
export class TuristInfoMainComponent implements OnInit {
  constructor(private store:Store<AvanturaState>,
              private router: Router) {}
  collapseMenu() {
    (document.getElementById('sidebar') as HTMLElement).classList.toggle('active');
  }
 
  ngOnInit() { 
  }
}
