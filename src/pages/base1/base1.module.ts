import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Base1Page } from './base1';

@NgModule({
  declarations: [
    Base1Page,
  ],
  imports: [
    IonicPageModule.forChild(Base1Page),
  ],
  exports: [
    Base1Page
  ]
})
export class Base1PageModule {}
