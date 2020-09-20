import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser:User;
  emptyFields:boolean;
  passwordError:boolean;
  writePIB:boolean;
  registerUserForm:FormGroup;
  constructor(private userService:UserService, private fb:FormBuilder, private router:Router) {
    
    this.registerUserForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.length === 6],
      email: ['', Validators.required],
      role:[''],
      pib: ['']
    });

   }

  ngOnInit(): void {
    if(localStorage.getItem("LoggedIn") === "true"){
     let role = localStorage.getItem("Role");
     this.router.navigate(['/'+ role]);
    }
    this.writePIB = false;
    this.emptyFields=false;
    this.passwordError=false;
  }

  onSubmit(){
    if(this.handleError() && this.handlePasswordError()){
      if(this.writePIB === true)
      {
        if(this.checkPIB() === true)
        {
          this.newUser={
            id:0,
            username:this.registerUserForm.value.username,
            email:this.registerUserForm.value.email,
            password:this.registerUserForm.value.password,
            role:"turistInfo",
            roleflag:true,
            pib:this.registerUserForm.value.pib,
            visited:[],
            komentari:[]
          }  
        }
        else{
          this.emptyFields=true
        }
      }
      else{
        this.newUser={
          id:0,
          username:this.registerUserForm.value.username,
          email:this.registerUserForm.value.email,
          password:this.registerUserForm.value.password,
          role:"korisnik",
          roleflag:false,
          pib:"",
          visited:[],
          komentari:[]
        }  
      };

      this.userService.userRegistration(this.newUser)
       .subscribe(user=>{
         if(user)
         {
          localStorage.setItem("Id", user.id.toString());
          localStorage.setItem("Username", user.username);
          localStorage.setItem("Role",user.role.toString());
          localStorage.setItem("LoggedIn", "true");
         // window.location.reload();
          this.router.navigate(['/'+ user.role])
         }
        else {
          alert("Korisnik sa ovim korisnickim imenom vec postoji!");
          this.router.navigate(['']);
        }
       })
      }
      else
      {
       this.emptyFields=true
      }
   }

   checkPIB()
   {
     if(this.registerUserForm.value.pib.length === 10)
       return true;
    return false;
   }
   handleError(){
    if(this.registerUserForm.value.username.length===0
      || this.registerUserForm.value.email.length===0
      || this.registerUserForm.value.password.length===0){
        return false;
      }
      return true;
  }

  handlePasswordError(){
    if(this.registerUserForm.value.password.length<6){
      this.passwordError=true;
      return false;
    }
    return true;
  }

  @Output() cancelClicked: EventEmitter<any> =
  new EventEmitter();

  cancelLogIn(): void {
  this.cancelClicked.emit();
}
}
