import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { WelcomeComponent } from './welcome/welcome.component';

const PageRouter: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'welcom', pathMatch: 'full' },
            {
                path: 'welcom',
                component: WelcomeComponent,
                data:{
                    breadcrumb:'首页' 
                }
            },{
                path:'basicInfo',
                loadChildren:'./basic-information/basic-information.module#BasicInformationModule',
                data:{
                    breadcrumb: '基本数据' 
               }
            }
        ]
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(PageRouter)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        //   CrisisDetailResolver
    ]
})
export class PageRoutingModule { }
export const PagesComponents=[PagesComponent,WelcomeComponent];
