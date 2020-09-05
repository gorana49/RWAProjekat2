import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OstaliPosecenoComponent } from './ostali-poseceno.component';

describe('OstaliPosecenoComponent', () => {
  let component: OstaliPosecenoComponent;
  let fixture: ComponentFixture<OstaliPosecenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OstaliPosecenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OstaliPosecenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
