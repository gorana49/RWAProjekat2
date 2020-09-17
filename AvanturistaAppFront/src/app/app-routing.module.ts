import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KorisnikMainComponent} from "../app/components/korisnik-main/korisnik-main.component"
import {TuristInfoMainComponent} from '../app/components/turist-info-main/turist-info-main.component'
import {IstraziSrbijuComponent} from '../app/components/istrazi-srbiju/istrazi-srbiju.component'
import {PretraziLokacijeComponent} from '../app/components/pretrazi-lokacije/pretrazi-lokacije.component'
import {PregledAvanturaComponent} from '../app/components/pregled-avantura/pregled-avantura.component'
import {AvanturaComponent} from '../app/components/avantura/avantura.component'
import {KalkulatorComponent} from '../app/components/kalkulator/kalkulator.component'
import {PosecenoComponent} from '../app/components/poseceno/poseceno.component'
import {OstaliPosecenoComponent} from '../app/components/ostali-poseceno/ostali-poseceno.component'
import {DodajAvanturuComponent} from '../app/components/dodaj-avanturu/dodaj-avanturu.component'
import {ProsecneCeneComponent} from '../app/components/prosecne-cene/prosecne-cene.component'
import { ContentComponent } from './components/content/content.component';
import { DetailComponent } from './components/detail/detail.component';


const routes: Routes = [
  {path: '', redirectTo: '/content', pathMatch: 'full'},
  {path: 'content', component: ContentComponent },
  {
    path: 'korisnik',
    component: KorisnikMainComponent,
    children: [
      {path: '', component: IstraziSrbijuComponent},
      {path: 'pregledAvantura', component: PregledAvanturaComponent},
      {path: 'kalkulator', component: KalkulatorComponent}, //kada se planira odmor,cene
      {path: 'poseceno', component: PosecenoComponent}, //dodajemo sliku da smo posetili neku avanturu
      {path: 'ostaliPoseceno', component: OstaliPosecenoComponent}, //ovo je kao feed na insta
    ]
  },
  {
    path: 'turistInfo',
    component:  TuristInfoMainComponent,
    children: [
      {path: '', component: PregledAvanturaComponent},
      { path: 'detail/:id', component: DetailComponent },
      {path: 'poseceno', component: PosecenoComponent},  //ovde se iscrtavaju moje avanture
      {path: 'dodajAvanturu', component: DodajAvanturuComponent}, 
      {path: 'prosecneCene', component: ProsecneCeneComponent} //dodavanje prosecnih cena na toj lokaciji
    ]
  },
  {path: '**', redirectTo: 'content', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
