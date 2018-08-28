import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProjectInfoComponent } from './service-project-info.component';

describe('ServiceProjectInfoComponent', () => {
  let component: ServiceProjectInfoComponent;
  let fixture: ComponentFixture<ServiceProjectInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceProjectInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
