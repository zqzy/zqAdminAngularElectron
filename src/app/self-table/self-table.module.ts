import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfTableComponent } from './self-table.component';
import { SharedModule } from '../shared/shared.module';
import { SelfTreeComponent } from './self-tree/self-tree.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    SelfTableComponent,
    SelfTreeComponent
  ],
  exports: [
    SelfTableComponent,
    SelfTreeComponent
  ]
})
export class SelfTableModule { }
