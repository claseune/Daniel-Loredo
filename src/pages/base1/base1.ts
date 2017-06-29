import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-edit',
  templateUrl: 'base1.html',
})
export class Base1Page {

  records: FirebaseListObservable<any>;
  private editFormData: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase, public formBuilder: FormBuilder, public viewCtrl: ViewController) {
  this.records = db.list('/users');
    this.editFormData = this.formBuilder.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      hobby: ['', Validators.required]
    });
  }
   guardar()
   {
     if(this.editFormData.valid)
     {
       this.records.push(this.editFormData.value)
     }
     else
     {
       console.error('Verifique su informacion')
     }
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }
}
