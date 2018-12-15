import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPinsComponent } from './map-pins.component';

describe('MapPinsComponent', () => {
  let component: MapPinsComponent;
  let fixture: ComponentFixture<MapPinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapPinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
