import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadUser, UserLogout } from 'src/app/store/actions/user.actions';
import { AdventureState } from 'src/app/store/entities/avantura.adapter';
import { State } from 'src/app/store/reducers/main.reducer';

@Component({
  selector: 'app-korisnik-main',
  templateUrl: './korisnik-main.component.html',
  styleUrls: ['./korisnik-main.component.css']
})
export class KorisnikMainComponent implements OnInit {
  showAreYouSure:boolean;

  constructor(private store:Store<State>,
              private router: Router) {
                this.showAreYouSure=false;
  }
  ngOnInit(){
    this.store.dispatch(new LoadUser(Number(localStorage.getItem("Id"))))
  };
  collapseMenu() {
    (document.getElementById('sidebar') as HTMLElement).classList.toggle('active');
  }
  showModal(){
    this.showAreYouSure=true;
  }
  
  cancelClicked(){
    this.showAreYouSure=false;
  }

  logout()
  {
    this.store.dispatch(new UserLogout());
    localStorage.clear();
    this.router.navigate(['/content']);
  }

}
