import { Component, OnInit } from '@angular/core';
import { Avantura } from 'src/app/models/avantura';
import { FormGroup, FormControl } from '@angular/forms';
import { AvanturaService } from 'src/app/services/avantura.service';
import { selectTotalAvanture } from 'src/app/store/entities/avantura.adapter';
import { Store} from '@ngrx/store';
import { Router } from '@angular/router';
import { State } from 'src/app/store/reducers/main.reducer';
import { IUser, User } from 'src/app/models/user';
import { DodajMojuAvanturu } from 'src/app/store/actions/user.actions';
import {DodajAvanturu} from '../../store/actions/avanture.actions'
@Component({
  selector: 'app-dodaj-avanturu',
  templateUrl: './dodaj-avanturu.component.html',
  styleUrls: ['./dodaj-avanturu.component.css']
})

export class DodajAvanturuComponent implements OnInit {
  newAvantura:Avantura;
  emptyFields:boolean;
  numberOfEntities:number;
  user:User;

  avantura:FormGroup = new FormGroup({
  naslov:new FormControl(''),
  lokacija:new FormControl(''),
  tezina:new FormControl(''),
  trajanje:new FormControl(''),
  description: new FormControl('')
  })
  constructor( private store:Store<State>,private router: Router) { 
  }

  ngOnInit(): void {
    this.emptyFields=false;
     this.store.select(selectTotalAvanture)
     .subscribe(numberOfAvanture=>this.numberOfEntities=numberOfAvanture);
       this.store.select(state=>state.auth.user).subscribe(user=>{
         if(user!= null || user!=undefined)
         {
          this.user = new User(user);
         }
       })
  }
  onSubmit(){
        if(this.handleError() == true)
        {
          this.newAvantura={
            id:0,
            naslov:this.avantura.value.naslov,
            lokacija:this.avantura.value.lokacija,
            tezina:this.avantura.value.tezina, 
            trajanje:this.avantura.value.trajanje,
            isAvailable:true,
            description:this.avantura.value.description,
          }

          if((this.user != null) || (this.user!= undefined) || this.avantura.value.lokacija.naslov==0 )
          {
          this.user.visited = [...this.user.visited, this.numberOfEntities+1];

          this.store.dispatch(new DodajMojuAvanturu(this.user));
          //ovde je rešenje 2 baze
          
          this.store.dispatch(new DodajAvanturu(this.newAvantura));
          
          this.router.navigate(['/turistInfo'])
          }
        }
   }


   handleError(){
    if(this.avantura.value.lokacija.length!=0
      && this.avantura.value.naslov.length!=0
      && this.avantura.value.description.length!=0){
        return true;
      }
      return false;
  }
}
