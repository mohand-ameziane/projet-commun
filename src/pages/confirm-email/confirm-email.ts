import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.us = navParams.get('us');
    this.us.sendEmailVerification();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmEmailPage');
  }
  

}
