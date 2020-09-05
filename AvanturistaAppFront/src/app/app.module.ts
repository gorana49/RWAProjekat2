import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginTextComponent } from './login/login-text/login-text.component';
import { LoginGraphicComponent } from './login/login-graphic/login-graphic.component';
import { ContentComponent } from './content/content.component';
import {MatButtonModule, MatButton} from '@angular/material/button';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http'
import {UserEffects} from '../app/store/effects/user.effects'
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import {KorisnikMainComponent} from "../app/korisnik-main/korisnik-main.component"
import {TuristInfoMainComponent} from '../app/turist-info-main/turist-info-main.component'
import {IstraziSrbijuComponent} from '../app/istrazi-srbiju/istrazi-srbiju.component'
import {PretraziLokacijeComponent} from '../app/pretrazi-lokacije/pretrazi-lokacije.component'
import {PregledAvanturaComponent} from '../app/pregled-avantura/pregled-avantura.component'
import {AvanturaComponent} from '../app/avantura/avantura.component'
import {KalkulatorComponent} from '../app/kalkulator/kalkulator.component'
import {PosecenoComponent} from '../app/poseceno/poseceno.component'
import {OstaliPosecenoComponent} from '../app/ostali-poseceno/ostali-poseceno.component'
import {DodajAvanturuComponent} from '../app/dodaj-avanturu/dodaj-avanturu.component'
import {ProsecneCeneComponent} from '../app/prosecne-cene/prosecne-cene.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginTextComponent,
    LoginGraphicComponent,
    ContentComponent,
    RegisterComponent,
    KorisnikMainComponent,
    TuristInfoMainComponent,
    IstraziSrbijuComponent,
    PretraziLokacijeComponent,
    PregledAvanturaComponent,
    AvanturaComponent,
    KalkulatorComponent,
    PosecenoComponent,
    OstaliPosecenoComponent,
    DodajAvanturuComponent,
    ProsecneCeneComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EffectsModule.forRoot([UserEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
