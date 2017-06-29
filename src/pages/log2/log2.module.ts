import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Log2Page } from './log2';

@NgModule({
  declarations: [
    Log2Page,
  ],
  imports: [
    IonicPageModule.forChild(Log2Page),
  ],
  exports: [
    Log2Page
  ]
})
export class Log2PageModule {}
