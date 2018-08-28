import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfMenuChildComponent } from './self-menu-child.component';

describe('SelfMenuChildComponent', () => {
  let component: SelfMenuChildComponent;
  let fixture: ComponentFixture<SelfMenuChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfMenuChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfMenuChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
