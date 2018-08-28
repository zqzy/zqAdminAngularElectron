import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login.component';
import { LoginComponent } from './login/login.component';
const UserRouter: Routes = [
    {
        path: '',
        component: UserLoginComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            {
                path: 'login',
                component: LoginComponent,
            }
        ]
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(UserRouter)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        //   CrisisDetailResolver
    ]
})
export class UserRoutingModule { }