import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ToastController } from 'ionic-angular';
import { UserProvider } from "../../providers/user/user";

/**
 * Generated class for the RenMotPassePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ren-mot-passe',
  templateUrl: 'ren-mot-passe.html',
})
export class RenMotPassePage {
   email: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
              public alertCtrl:AlertController, public userservice: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RenMotPassePage');
  }
  renesialise(){
    var toaster = this.toastCtrl.create({
      duration: 3000,
      position: 'bottom'
    });
    let alert= this.alertCtrl.create({
      buttons: ['ok']
    });
    this.userservice.renesialiseMotPasse(this.email).then((res : any)=>{
       if(res.success){
          alert.setTitle('Email envoyer ');
          alert.setSubTitle('Veuillez suivre les instructions dans lemail pour réinitialiser votre mot de passe');
          toaster.setMessage('email envoyér regarde ta boit mail et suivre le lien ');
          toaster.present();
       }
       else{
         alert.setTitle('Échoué');
         toaster.setMessage('errure dans email ou ta pas encoure un compte ');
         toaster.present();
       }
    })
 }
}
