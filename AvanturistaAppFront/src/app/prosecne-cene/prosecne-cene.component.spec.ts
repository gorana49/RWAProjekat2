import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsecneCeneComponent } from './prosecne-cene.component';

describe('ProsecneCeneComponent', () => {
  let component: ProsecneCeneComponent;
  let fixture: ComponentFixture<ProsecneCeneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProsecneCeneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsecneCeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
