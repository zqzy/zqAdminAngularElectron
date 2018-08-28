// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { UserLoginComponent } from './user-login.component';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user.router';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        SharedModule,
        UserRoutingModule,
    ],
    declarations: [
        UserLoginComponent,
        LoginComponent,
        // DisableControlDirective
    ],
    exports: [
        UserLoginComponent,
        LoginComponent,
    ],providers:[]
})
export class UserLoginModule {
    constructor(
    ) {

    }
}
