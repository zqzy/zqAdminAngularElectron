import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicInformationComponent } from './basic-information.component';

const BasiceInfoRouter: Routes = [
    {
        path: '',
        component: BasicInformationComponent,
        children: [
            { path: '', redirectTo: 'store', pathMatch: 'full' },
            {
                path: 'store',
                loadChildren: './store-manage/store-manage.module#StoreManageModule',
                data: {
                    breadcrumb: '门店管理'
                }
            },{
                path:'serviceProject',
                loadChildren:'./service-project/service-project.module#ServiceProjectModule',
                data:{
                    breadcrumb:'服务项管理'
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
export class BasicInfoRoutingModule { }
export const BasicInfoComponents = [BasicInformationComponent];
