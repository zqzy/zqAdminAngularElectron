import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProjectComponent } from './service-project.component';
import { ServiceProjectInfoComponent } from './service-project-info/service-project-info.component';

const ServiceProjectRouter: Routes = [
    {
        path: '',
        component: ServiceProjectComponent,
        children: [
            { path: '', redirectTo: 'serviceInfo', pathMatch: 'full' },
            {
                path: 'serviceInfo',
                component:ServiceProjectInfoComponent,
                data: {
                    breadcrumb: '服务项信息'
                }
            }
        ]
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(ServiceProjectRouter)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        //   CrisisDetailResolver
    ]
})
export class ServiceProjectRoutingModule { }
export const ServiceProjectComponents = [ServiceProjectComponent,ServiceProjectInfoComponent];
