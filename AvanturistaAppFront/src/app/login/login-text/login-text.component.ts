import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import {UserService} from "../../services/user.service"
import { Store } from '@ngrx/store';
import {State} from '../../store/reducers/main.reducer'
import { LoggingUser } from 'src/app/models/logging-user';
import {map, tap} from 'rxjs/operators'
import { noop } from 'rxjs';
import { Router } from '@angular/router';
import { LoadUser } from 'src/app/store/actions/user.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/models/user';
@Component({
  selector: 'login-text',
  templateUrl: './login-text.component.html',
  styleUrls: ['./login-text.component.css']
})
export class LoginTextComponent implements OnInit {

  loggingUserForm: FormGroup;
  loggingUser: LoggingUser
  constructor(private userService:UserService,
              private store: Store<State>, private router:Router, private fb:FormBuilder) {
                this.loggingUserForm = this.fb.group({
                  username: ['', Validators.required],
                  password: ['', Validators.length === 6]
                });
  }

  ngOnInit(): void {
  }

  @Output() cancelClicked: EventEmitter<any> =
  new EventEmitter();

  cancelLogIn(): void {
  this.cancelClicked.emit();
  }

  onSubmit()
  {
    this.loggingUser={
      username:this.loggingUserForm.value.username,
      password:this.loggingUserForm.value.password
    }
    this.userService.getUser(this.loggingUser)
    .subscribe(user=> {
      if(user)
      {
        localStorage.setItem("Id", user.id.toString());
        localStorage.setItem("LoggedIn", "true");
        localStorage.setItem("Role", user.role);
        this.router.navigate([`/${user.role}`]);
      }
      })}
}
