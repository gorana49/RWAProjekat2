import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  displayLogIn:boolean; 
  displayRegister:boolean;

  constructor() {
    this.displayLogIn = false;
    this.displayRegister=false;
  }
  ngOnInit(): void {
  }
  showLogInModal(): void {
    this.displayLogIn = true;
  }
  showRegisterModal():void{
    this.displayRegister = true;
  }
  hideLogInModal(): void {
    this.displayLogIn = false;
  }
  hideRegisterModal(): void {
    this.displayRegister = false;
  }
}
