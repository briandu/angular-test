import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEstimateComponent } from './home-estimate.component';

describe('HomeEstimateComponent', () => {
  let component: HomeEstimateComponent;
  let fixture: ComponentFixture<HomeEstimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
