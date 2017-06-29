import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObjetosBasePage } from './objetos-base';

@NgModule({
  declarations: [
    ObjetosBasePage,
  ],
  imports: [
    IonicPageModule.forChild(ObjetosBasePage),
  ],
  exports: [
    ObjetosBasePage
  ]
})
export class ObjetosBasePageModule {}
