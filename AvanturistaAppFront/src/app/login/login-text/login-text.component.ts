import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import {LoginTextService} from "../../services/loginText.service"
import { Store } from '@ngrx/store';
import {State} from '../../store/reducers/main.reducer'
import { AuthKorisnik } from 'src/app/models/auth-korisnik';
import {LoginUser} from '../../store/actions/user.actions';
import {tap} from 'rxjs/operators'
import { noop } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'login-text',
  templateUrl: './login-text.component.html',
  styleUrls: ['./login-text.component.css']
})
export class LoginTextComponent implements OnInit {

  
  constructor(private auth:LoginTextService,
              private store: Store<State>, private router:Router) { }

  ngOnInit(): void {
  }

  @Output() cancelClicked: EventEmitter<any> =
  new EventEmitter();

  cancelLogIn(): void {
  this.cancelClicked.emit();
  }

  login()
  {
    let authKor = new AuthKorisnik("gocki", "gocki");
    this.auth.getUser(authKor)
    .pipe(
      tap(user => {
          this.store.dispatch(new LoginUser({user}))
          console.log(user[0].role);
          this.router.navigate([`/${user[0].role}`])
      })
    )
    .subscribe(
    noop, 
    ()=> alert("Neuspelo logovanje!")
    );
  }

}
