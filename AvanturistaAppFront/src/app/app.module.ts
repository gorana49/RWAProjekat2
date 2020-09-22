import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginTextComponent } from './login/login-text/login-text.component';
import { LoginGraphicComponent } from './login/login-graphic/login-graphic.component';
import { ContentComponent } from '../app/components/content/content.component';
import {MatButtonModule, MatButton} from '@angular/material/button';
import { RegisterComponent } from '../app/components/register/register.component';
import {HttpClientModule} from '@angular/common/http'
import {UserEffects} from '../app/store/effects/user.effects'
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
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
import {komentariEffects} from '../app/store/effects/komentari.effects'
import {AvantureEffects} from '../app/store/effects/avantura.effects';
import { DetailComponent } from '../app/components/detail/detail.component';
import { CommentFormComponent } from '../app/components/comment-form/comment-form.component';
import { CommentListComponent } from '../app/components/comment-list/comment-list.component';
import { CommentComponent } from '../app/components/comment/comment.component'
import { mainReducer } from './store/reducers/main.reducer';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
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
    ProsecneCeneComponent,
    DetailComponent,
    CommentFormComponent,
    CommentListComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    StoreModule.forRoot(mainReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EffectsModule.forRoot([UserEffects,komentariEffects,AvantureEffects]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
