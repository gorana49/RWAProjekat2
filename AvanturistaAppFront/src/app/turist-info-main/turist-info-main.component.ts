import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
 // selector: 'app-turist-info-main',
  templateUrl: './turist-info-main.component.html',
  styleUrls: ['./turist-info-main.component.css']
})
export class TuristInfoMainComponent implements OnInit {

  //showAreYouSure:boolean;

  constructor(
              private router: Router) {
  }
  ngOnInit(){};
  collapseMenu() {
    (document.getElementById('sidebar') as HTMLElement).classList.toggle('active');
  }

  // logOut(): void {
  //   this.loginService.logout();
  //   console.log('logout buttom clicked');
  // }


  // showModal(){
  //   this.showAreYouSure=true;
  // }
  
  // cancelClicked(){
  //   this.showAreYouSure=false;
  // }

}
