import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledAvanturaComponent } from './pregled-avantura.component';

describe('PregledAvanturaComponent', () => {
  let component: PregledAvanturaComponent;
  let fixture: ComponentFixture<PregledAvanturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregledAvanturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledAvanturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
