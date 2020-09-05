import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajAvanturuComponent } from './dodaj-avanturu.component';

describe('DodajAvanturuComponent', () => {
  let component: DodajAvanturuComponent;
  let fixture: ComponentFixture<DodajAvanturuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajAvanturuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajAvanturuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
