import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { ProfilPage } from '../profil/profil';
import { MessagePage } from '../message/message';
import { EvenmentPage } from '../evenment/evenment';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(private afAuth : AngularFireAuth, private toast : ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid){
    this.toast.create({
      message : 'welcome to APP_NAME, ${data.email}',
      duration: 3000
    }).present();
  }
  else{
    this.toast.create({
      message : 'tarwi',
      duration: 3000
    }).present();
  }
    });
  }
  allepagemessage(){
    this.navCtrl.push('MessagePage');
  }
  allepageprofil(){
   this.navCtrl.push('ProfilPage');
  }
  allepageevenment(){
   this.navCtrl.push('EvenmentPage');
  }
}
