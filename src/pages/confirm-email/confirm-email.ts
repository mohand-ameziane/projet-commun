import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import {LoginPage} from "../login/login";


/**
 * Generated class for the ConfirmEmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm-email',
  templateUrl: 'confirm-email.html',
})
export class ConfirmEmailPage {

  private us;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth) {
    this.afAuth.auth.currentUser.sendEmailVerification();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmEmailPage');
    setTimeout(() => {
      this.navCtrl.setRoot("LoginPage");
    }, 3000);
  }



}
