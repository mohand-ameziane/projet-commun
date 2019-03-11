import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
              public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {


  }

  goToEvent() {
    this.navCtrl.push('EvenmentPage');
  }

  goToSearch() {
    this.navCtrl.push('RecherchePage');
  }

  goToMessage() {
    this.navCtrl.push('MessagePage');
  }

}
