import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  displayLogIn:boolean; 
  displayLogInGraph: boolean;

  constructor() {
    this.displayLogIn = false;
    this.displayLogInGraph = false;
  }
  ngOnInit(): void {
  }

  showLogInModal(): void {
    this.displayLogIn = true;
  }

  showLogInModalGraph():void{
    this.displayLogInGraph = true;
  }
  hideLogInModal(): void {
    this.displayLogIn = false;
  }
  hideLogInModalGraph(): void {
    this.displayLogInGraph = false;
  }

}
