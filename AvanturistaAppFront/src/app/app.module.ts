import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginTextComponent } from './login/login-text/login-text.component';
import { LoginGraphicComponent } from './login/login-graphic/login-graphic.component';
import { ContentComponent } from './content/content.component';
import {MatButtonModule, MatButton} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    LoginTextComponent,
    LoginGraphicComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
