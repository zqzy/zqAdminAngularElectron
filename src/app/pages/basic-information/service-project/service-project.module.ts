import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ServiceProjectRoutingModule, ServiceProjectComponents } from './service-project.router';
import { ServiceProjectInfoComponent } from './service-project-info/service-project-info.component';
import { SelfTableModule } from '../../../self-table/self-table.module';

@NgModule({
  imports: [
  SharedModule,
    ServiceProjectRoutingModule,
    SelfTableModule
  ],
  declarations: [ServiceProjectComponents, ServiceProjectInfoComponent]
})
export class ServiceProjectModule { }
