import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosecenoComponent } from './poseceno.component';

describe('PosecenoComponent', () => {
  let component: PosecenoComponent;
  let fixture: ComponentFixture<PosecenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosecenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosecenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
