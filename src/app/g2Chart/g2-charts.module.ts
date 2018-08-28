// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { SharedModule } from '../shared/shared.module';
import { G2ChartsComponent } from './g2-charts/g2-charts.component';
import { G2BarComponent } from './g2-bar/g2-bar.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        G2ChartsComponent,
        G2BarComponent
    ],
    exports: [
        G2ChartsComponent,
        G2BarComponent
    ]
})
export class G2ChartsModule {

}
