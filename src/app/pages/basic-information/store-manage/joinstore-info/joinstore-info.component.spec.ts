import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinstoreInfoComponent } from './joinstore-info.component';

describe('JoinstoreInfoComponent', () => {
  let component: JoinstoreInfoComponent;
  let fixture: ComponentFixture<JoinstoreInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinstoreInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinstoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
