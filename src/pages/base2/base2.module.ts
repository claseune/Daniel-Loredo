import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Base2Page } from './base2';

@NgModule({
  declarations: [
    Base2Page,
  ],
  imports: [
    IonicPageModule.forChild(Base2Page),
  ],
  exports: [
    Base2Page
  ]
})
export class Base2PageModule {}
