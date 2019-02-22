import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import {ConnecterPage} from "../pages/connecter/connecter";
import {Facebook} from "@ionic-native/facebook";
import { AngularFireModule } from "angularfire2";
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule} from 'angularfire2/database'
import { AuthProvider } from '../providers/auth/auth';
import { Calendar} from '@ionic-native/calendar/ngx';

@NgModule({
  declarations: [
    MyApp,  
    ConnecterPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      monthNames: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet' , 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'],
      monthShortNames: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui', 'Juil', 'Aou', 'Spe', 'Oct', 'Nov', 'Dec'],
      dayNames: ['Lunid', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
      dayShortNames: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    }),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
       
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConnecterPage, 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    AuthProvider,
    Calendar,
    
  ]
})
export class AppModule {}
