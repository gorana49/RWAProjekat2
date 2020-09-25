import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import {UserService} from "../../services/user.service"
import { Store } from '@ngrx/store';
import {State} from '../../store/reducers/main.reducer'
import { LoggingUser } from 'src/app/models/logging-user';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'login-text',
  templateUrl: './login-text.component.html',
  styleUrls: ['./login-text.component.css']
})
export class LoginTextComponent implements OnInit {

  loggingUserForm: FormGroup;
  error = false;
  constructor(private userService:UserService,
              private store: Store<State>, private router:Router, private fb:FormBuilder) {
                this.loggingUserForm = this.fb.group({
                  username: ['', Validators.required],
                  password: ['', Validators.length >= 6]
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
    if(this.loggingUserForm.valid) {
    const loggingUser: LoggingUser ={ ...this.loggingUserForm.value };
    this.userService.getUser(loggingUser).subscribe(user=> {
        if(user)
        {
          localStorage.setItem("Id", user.id.toString());
          localStorage.setItem("LoggedIn", "true");
          localStorage.setItem("Role", user.role);
          this.router.navigate([`/${user.role}`]);
        } else {
          this.error = true;
        }
      });
    }
  }
}
