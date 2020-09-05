import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IAuthKorisnikGraphic, AuthKorisnikGraphic } from '../../models/auth-korisnik-graphic';
import {AuthKorisnikGraphicResponse} from "../../models/auth-korisnik-graphic-response"
import {LoginGraphService} from "../../services/loginGraph.service"
import { ɵangular_packages_platform_browser_platform_browser_j } from '@angular/platform-browser';


@Component({
  selector: 'login-graphic',
  templateUrl: './login-graphic.component.html',
  styleUrls: ['./login-graphic.component.css']
})
export class LoginGraphicComponent implements OnInit {
  
  userRequest:AuthKorisnikGraphic;
  errorMessage: string;
  userResponse: AuthKorisnikGraphicResponse;
  constructor(private loginService: LoginGraphService) { }
  identifikator: number;
  ngOnInit(): void {
  }
  
  @Output() cancelClicked: EventEmitter<any> =
  new EventEmitter();

  cancelLogIn(): void {
  this.cancelClicked.emit();
  }
  iscrtajTabelu() :void {
    const username: HTMLInputElement = (document.getElementById('username-input') as HTMLInputElement);
    this.userRequest = new AuthKorisnikGraphic(username.value);
    if(!this.checkUserInput(username.value))
    {
      this.loginService.getUserPass(this.userRequest)
      .subscribe(
          (user) => {
              this.userResponse.Password = user.password;
              this.userResponse.Boja = user.boja;
              this.userResponse.srediSifru();
              this.identifikator=0;
              let polja:HTMLDivElement[] = (document.querySelectorAll("polje") as unknown as HTMLDivElement[]);
              let karakteri:string = Math.random().toString(36).substring(16);
              let nizKaraktera= karakteri.split(" ");
              polja.forEach((el,ind)=> {
                  if(ind == this.userResponse.Boja)
                  {
                      el.innerHTML = this.userResponse.Password[this.identifikator];
                      this.identifikator++;
                  }
                  else
                  {
                      el.innerHTML = nizKaraktera[ind];
                  }
              })
              
          },
          () => {
              this.errorMessage = 'Uneli ste nepostojeci username!';
              username.value = '';
          }
      );
    }
  
  }
  
    checkUserInput(username: string): boolean {
      let provera = false;
      if (username === '' || username == null || username === undefined)
      {
          provera = true;
          this.errorMessage = 'Unesite username';
      }
      if (provera)
      {
          this.errorMessage += '!';
      }
      return provera;
  }
}