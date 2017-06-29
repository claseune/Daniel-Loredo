import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginRPage } from './login-r';

@NgModule({
  declarations: [
    LoginRPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginRPage),
  ],
  exports: [
    LoginRPage
  ]
})
export class LoginRPageModule {}
