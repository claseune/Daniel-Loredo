import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventosPage } from '../eventos/eventos';
import { LoginPage } from '../login/login';
import { Base1Page } from '../base1/base1';
import {GpsPage} from '../GPS/GPS';
import {ColorPickerPage} from '../color-picker/color-picker';
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
this.navCtrl.push(GpsPage,
{
val: 'true'
})
  }

  loadData()
  {
this.navCtrl.push(ColorPickerPage,
{
val: 'true'
})
  }


}
