import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
 // nouveauUtilisateur={
   // email:'',
   // password:''
  //}

  constructor(private afAuth : AngularFireAuth, private toast : ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }
   
  ionViewDidLoad() {
    
    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid ){
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

  allepageprofil(){
   this.navCtrl.push('ListProfilPage');
  }
  allepageevenment(){
   this.navCtrl.push('EvenmentPage');
  }
}
