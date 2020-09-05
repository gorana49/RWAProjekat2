import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuristInfoMainComponent } from './turist-info-main.component';

describe('TuristInfoMainComponent', () => {
  let component: TuristInfoMainComponent;
  let fixture: ComponentFixture<TuristInfoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuristInfoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuristInfoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
