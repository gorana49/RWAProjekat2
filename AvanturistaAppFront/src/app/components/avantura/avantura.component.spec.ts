import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvanturaComponent } from './avantura.component';

describe('AvanturaComponent', () => {
  let component: AvanturaComponent;
  let fixture: ComponentFixture<AvanturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvanturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvanturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
