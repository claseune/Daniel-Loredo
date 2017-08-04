import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BluetoothSerial } from '@ionic-native/bluetooth-serial';

/**
 * Generated class for the BluetoothSerialPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-bluetooth-serial',
  templateUrl: 'bluetooth-serial.html',
})
export class BluetoothSerialPage {

devices: any;
data: string;
unpaireds: any;
colorToSet: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public bluetoothSerial:BluetoothSerial) {
  }

discoverUnpairedDevices() {
    console.log('Buscando...')
    this.bluetoothSerial.discoverUnpaired().then((resp) => {
      this.unpaireds = resp;
      console.log(this.unpaireds)

    }, (error) => {
      console.log(error)
    })
  }
  ionViewDidLoad() {
   this.bluetoothSerial.list().then((success) => {
      console.log(success);
      this.devices = success;
    }, (error) => {
      console.log(error);
    })

  }

}
