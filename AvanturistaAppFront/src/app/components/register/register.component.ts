import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser: User;
  emptyFields: boolean;
  passwordError: boolean;
  registerUserForm:FormGroup;
  constructor(private userService:UserService, private fb:FormBuilder, private router:Router) {
    
    this.registerUserForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.length >= 5],
      email: ['', [Validators.required, Validators.email]],
      writePIB: [ false ],
      pib: ['', Validators.length === 10]
    });

   }

  ngOnInit(): void {
    if(localStorage.getItem("LoggedIn") === "true"){
     let role = localStorage.getItem("Role");
     this.router.navigate(['/'+ role]);
    }
  }

  onSubmit(){
    if(this.registerUserForm.valid) {

      this.newUser = {
        id:0,
        username:this.registerUserForm.value.username,
        email:this.registerUserForm.value.email,
        password:this.registerUserForm.value.password,
        role: this.registerUserForm.value.writePIB ? 'turistInfo' : 'korisnik',
        roleflag:true,
        pib:this.registerUserForm.value.pib,
        visited:[],
        komentari:[]
      };

      this.userService.userRegistration(this.newUser)
       .subscribe(user=>{
         if(user)
         {
          localStorage.setItem("Id", user.id.toString());
          localStorage.setItem("Username", user.username);
          localStorage.setItem("Role",user.role.toString());
          localStorage.setItem("LoggedIn", "true");
          this.router.navigate(['/'+ user.role])
         }
        else {
          alert("Korisnik sa ovim korisnickim imenom vec postoji!");
          this.router.navigate(['']);
        }
       })
      }
   }

  @Output() cancelClicked: EventEmitter<any> =
  new EventEmitter();

  cancelLogIn(): void {
  this.cancelClicked.emit();
}
}
