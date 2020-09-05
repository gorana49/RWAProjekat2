import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstraziSrbijuComponent } from './istrazi-srbiju.component';

describe('IstraziSrbijuComponent', () => {
  let component: IstraziSrbijuComponent;
  let fixture: ComponentFixture<IstraziSrbijuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstraziSrbijuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstraziSrbijuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
