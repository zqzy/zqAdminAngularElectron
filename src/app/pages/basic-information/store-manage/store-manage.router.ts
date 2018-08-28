import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreManageComponent } from './store-manage.component';
import { StoreInfoComponent } from './store-info/store-info.component';
import { JoinstoreInfoComponent } from './joinstore-info/joinstore-info.component';
import { AddupdataStoreComponent } from './addupdata-store/addupdata-store.component';

const BasiceInfoRouter: Routes = [
    {
        path: '',
        component: StoreManageComponent,
        children: [
            { path: '', redirectTo: 'storeInfo', pathMatch: 'full' },
            {
                path: 'storeInfo',
                component:StoreInfoComponent,
                data: {
                    breadcrumb: '门店信息' 
                  }
            },{
                path:'joinstoreInfo',
                component:JoinstoreInfoComponent,
                data: {
                    breadcrumb: '加盟门店信息' 
                  }
            },{
                path:'addUpdataStore',
                component:AddupdataStoreComponent,
                data: {
                    breadcrumb: '新增门店' 
                  }
            }
        ]
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(BasiceInfoRouter)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        //   CrisisDetailResolver
    ]
})
export class StoreManageRoutingModule { }
export const StoreManageComponents=[StoreManageComponent,StoreInfoComponent,JoinstoreInfoComponent,AddupdataStoreComponent];
