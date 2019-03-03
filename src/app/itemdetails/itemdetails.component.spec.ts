import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { itemdetailsComponent } from './itemdetails.component';

describe('itemdetailsComponent', () => {
  let component: itemdetailsComponent;
  let fixture: ComponentFixture<itemdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ itemdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(itemdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
