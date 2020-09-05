import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../../models/user';
import { LoginTextService } from '../../services/loginText.service';

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

    user:FormGroup = new FormGroup({
    email:new FormControl(''),
    username:new FormControl(''),
    password:new FormControl(''),
    role:new FormControl(''),
    pib: new FormControl('')
  })
  constructor(private userService:LoginTextService) { }

  ngOnInit(): void {

    if(localStorage.getItem("auth.loggedIn")){
     //ovde rutiramo na home
    }
    this.writePIB = false;
    this.emptyFields=false;
    this.passwordError=false;
  }

  onSubmit(){
    if(this.handleError() && this.handlePasswordError()){

      if(this.writePIB == true)
      {
        if(this.checkPIB())
        {
          this.newUser={
            id:0,
            username:this.user.value.username,
            email:this.user.value.email,
            password:this.user.value.password,
            role:"korisnik",
            roleflag:false,
            pib:this.user.value.pib,
            poseceno:[],
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
          username:this.user.value.username,
          email:this.user.value.email,
          password:this.user.value.password,
          role:"turistInfo",
          roleflag:false,
          pib:"",
          poseceno:[],
          komentari:[]
        }  
      }
       this.userService.userRegistration(this.newUser)
       .subscribe(user=>{
          //ovde treba da se sredi to sta sve pamtimo u store za user-a  
        //localStorage.setItem("auth.user", user);
             localStorage.setItem("auth.user.Id", user.id.toString());
             localStorage.setItem("auth.user.Username", user.username);
             localStorage.setItem("auth.user.Role",user.role.toString());
             localStorage.setItem("auth.loggedIn", "true");
             window.location.reload();
           //  this.router.navigate(['/home'])
       })
    }else{
       this.emptyFields=true
     }
   }

   checkPIB()
   {
     if(this.user.value.pib.length === 10)
       return true;
    return false;
   }
   handleError(){
    if(this.user.value.username.length===0
      || this.user.value.email.length===0
      || this.user.value.password.length===0){
        return false;
      }
      return true;
  }

  handlePasswordError(){
    if(this.user.value.password.length<6){
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
