import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikMainComponent } from './korisnik-main.component';

describe('KorisnikMainComponent', () => {
  let component: KorisnikMainComponent;
  let fixture: ComponentFixture<KorisnikMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KorisnikMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisnikMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
