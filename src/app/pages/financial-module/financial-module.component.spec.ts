import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialModuleComponent } from './financial-module.component';

describe('FinancialModuleComponent', () => {
  let component: FinancialModuleComponent;
  let fixture: ComponentFixture<FinancialModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
