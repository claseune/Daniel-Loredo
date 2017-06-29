import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { EventosPage } from '../pages/eventos/eventos';
import { LoginPage } from '../pages/login/login';
import { Base1Page } from '../pages/base1/base1';
import { Base2Page } from '../pages/base2/base2';
import { Log2Page } from '../pages/log2/log2';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

export const firebaseConfig = {
    apiKey: "AIzaSyBxaH728-lL3--N32KWlSupnbsr0rH0z4c",
    authDomain: "practica-d30e6.firebaseapp.com",
    databaseURL: "https://practica-d30e6.firebaseio.com",
    projectId: "practica-d30e6",
    storageBucket: "",
    messagingSenderId: "43484667084"
  }

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventosPage,
    LoginPage,
    Base1Page,
    Base2Page,
    Log2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventosPage,
    LoginPage,
      Base1Page,
    Base2Page,
    Log2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
