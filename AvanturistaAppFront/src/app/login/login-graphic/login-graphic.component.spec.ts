import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGraphicComponent } from './login-graphic.component';

describe('LoginGraphicComponent', () => {
  let component: LoginGraphicComponent;
  let fixture: ComponentFixture<LoginGraphicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginGraphicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
