import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObjetosBaseEdicionPage } from './objetos-base-edicion';

@NgModule({
  declarations: [
    ObjetosBaseEdicionPage,
  ],
  imports: [
    IonicPageModule.forChild(ObjetosBaseEdicionPage),
  ],
  exports: [
    ObjetosBaseEdicionPage
  ]
})
export class ObjetosBaseEdicionPageModule {}
