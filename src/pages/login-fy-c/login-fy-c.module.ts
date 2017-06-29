import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginFyCPage } from './login-fy-c';

@NgModule({
  declarations: [
    LoginFyCPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginFyCPage),
  ],
  exports: [
    LoginFyCPage
  ]
})
export class LoginFyCPageModule {}
