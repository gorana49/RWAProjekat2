import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PretraziLokacijeComponent } from './pretrazi-lokacije.component';

describe('PretraziLokacijeComponent', () => {
  let component: PretraziLokacijeComponent;
  let fixture: ComponentFixture<PretraziLokacijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PretraziLokacijeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PretraziLokacijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
