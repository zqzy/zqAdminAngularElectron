import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfTableComponent } from './self-table.component';

describe('SelfTableComponent', () => {
  let component: SelfTableComponent;
  let fixture: ComponentFixture<SelfTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
