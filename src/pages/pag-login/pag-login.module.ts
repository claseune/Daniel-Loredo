import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagLoginPage } from './pag-login';

@NgModule({
  declarations: [
    PagLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(PagLoginPage),
  ],
  exports: [
    PagLoginPage
  ]
})
export class PagLoginPageModule {}
