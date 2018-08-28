import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfTreeComponent } from './self-tree.component';

describe('SelfTreeComponent', () => {
  let component: SelfTreeComponent;
  let fixture: ComponentFixture<SelfTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
