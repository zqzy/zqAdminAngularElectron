// Angular Imports
import { NgModule, enableProdMode } from '@angular/core';

// This Module's Components
import { SharedModule } from '../shared/shared.module';
import { PageRoutingModule, PagesComponents } from './pages.router';
// import { G2ChartsModule } from '../g2Chart/g2-charts.module';


// import 'zone.js';
// import 'reflect-metadata';
import { SelfTableModule } from '../self-table/self-table.module';
import { SelfMenuChildComponent } from './self-menu-child/self-menu-child.component';
import { TongXService } from '../service/tongxData';
import { SelfTableComponent } from '../self-table/self-table.component';
@NgModule({
    imports: [
        SharedModule,
        // G2ChartsModule,
        SelfTableModule,
        PageRoutingModule
    ],
    declarations: [
        PagesComponents,
        SelfMenuChildComponent,
    ],
    exports: [
        PagesComponents,
        SelfMenuChildComponent
    ],providers:[
        TongXService
    ],entryComponents:[SelfTableComponent]
})
export class PagesModule {

}
