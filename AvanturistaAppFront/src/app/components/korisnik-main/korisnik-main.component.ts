import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-korisnik-main',
  templateUrl: './korisnik-main.component.html',
  styleUrls: ['./korisnik-main.component.css']
})
export class KorisnikMainComponent implements OnInit {
  showAreYouSure:boolean;

  constructor(
              private router: Router) {
                this.showAreYouSure=false;
  }
  ngOnInit(){};
  collapseMenu() {
    (document.getElementById('sidebar') as HTMLElement).classList.toggle('active');
  }
  showModal(){
    this.showAreYouSure=true;
  }
  
  cancelClicked(){
    this.showAreYouSure=false;
  }

}
