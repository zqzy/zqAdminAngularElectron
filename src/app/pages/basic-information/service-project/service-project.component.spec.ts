import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProjectComponent } from './service-project.component';

describe('ServiceProjectComponent', () => {
  let component: ServiceProjectComponent;
  let fixture: ComponentFixture<ServiceProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
