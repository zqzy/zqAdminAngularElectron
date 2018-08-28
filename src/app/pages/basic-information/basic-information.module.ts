import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInformationComponent } from './basic-information.component';
import { SharedModule } from '../../shared/shared.module';
import { BasicInfoRoutingModule } from './basic-information.router';
import { SelfTableModule } from '../../self-table/self-table.module';
import { ServiceProjectComponent } from './service-project/service-project.component';

@NgModule({
  imports: [
    SharedModule,
    SelfTableModule,
    BasicInfoRoutingModule
  ],
  declarations: [
    BasicInformationComponent,
  ]
})
export class BasicInformationModule { }
