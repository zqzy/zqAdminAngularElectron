import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { StoreManageRoutingModule, StoreManageComponents } from './store-manage.router';
import { JoinstoreInfoComponent } from './joinstore-info/joinstore-info.component';
import { SelfTableModule } from '../../../self-table/self-table.module';
import { AddupdataStoreComponent } from './addupdata-store/addupdata-store.component';

@NgModule({
  imports: [
    SharedModule,
    SelfTableModule,

    StoreManageRoutingModule
  ],
  exports:[
  ],
  declarations: [StoreManageComponents]
})
export class StoreManageModule { }
