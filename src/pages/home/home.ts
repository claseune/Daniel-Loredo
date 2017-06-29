import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventosPage } from '../eventos/eventos';
import { LoginPage } from '../login/login';
import { Base1Page } from '../base1/base1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  load()
  {
this.navCtrl.push(EventosPage,
{
val: 'true'
})
  }

  loadLogin()
  {
this.navCtrl.push(LoginPage,
{
val: 'true'
})
  }

  loadData()
  {
this.navCtrl.push(Base1Page,
{
val: 'true'
})
  }


}
