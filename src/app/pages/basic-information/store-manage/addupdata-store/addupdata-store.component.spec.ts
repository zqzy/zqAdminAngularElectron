import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddupdataStoreComponent } from './addupdata-store.component';

describe('AddupdataStoreComponent', () => {
  let component: AddupdataStoreComponent;
  let fixture: ComponentFixture<AddupdataStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddupdataStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddupdataStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
