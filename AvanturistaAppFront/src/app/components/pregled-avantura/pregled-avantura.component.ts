import { Component, OnInit } from '@angular/core';
import { AvanturaState, selectAllAvanture } from 'src/app/store/entities/avantura.adapter';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Dictionary } from '@ngrx/entity';
import { Avantura } from 'src/app/models/avantura';
import { User } from 'src/app/models/user';
import { LoginUser } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-pregled-avantura',
  templateUrl: './pregled-avantura.component.html',
  styleUrls: ['./pregled-avantura.component.css']
})
export class PregledAvanturaComponent implements OnInit {

  constructor(private store:Store<AvanturaState>,
    private router: Router) { }
  avanture$:Observable<Dictionary<Avantura>>;
  ngOnInit(): void {
    if(localStorage.getItem("auth.loggedIn")!=="true"){
      this.router.navigate(['content'])
    }
    this.avanture$=this.store.select(selectAllAvanture);
    let id = Number(localStorage.getItem("id"));
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");
    let email = localStorage.getItem("email");
    let role = localStorage.getItem("role");
    let roleflag = Boolean(localStorage.getItem("roleflag"));
    let pib = localStorage.getItem("pib");
   // let poseceno= localStorage.getItem("posecno");
   // let komentari = localStorage.getItem("komentari");

    let user= new User(id, username, password, email, role, roleflag, pib)//poseceno, komentari);
    this.store.dispatch(new LoginUser({user}));
  }

}
