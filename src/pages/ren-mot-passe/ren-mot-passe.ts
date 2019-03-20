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
  newuser = {
    email:'',
  }
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
    if(this.newuser.email=='' || !this.newuser.email.includes('@univ-paris1.fr')){
      toaster.setMessage('Veuillez entrer votre Email universitaire');
      toaster.present();
   }else{
    let alert= this.alertCtrl.create({
      buttons: ['ok']
    });
    this.userservice.renesialiseMotPasse(this.newuser.email).then((res : any)=>{
       if(res.success){
          alert.setTitle('Email envoyé ');
          alert.setSubTitle('Veuillez suivre les instructions dans lemail pour réinitialiser votre mot de passe');
          toaster.setMessage('Email envoyé, veuillez regarder votre boîte mail universitaire ');
          toaster.present();
       }
       else{    
         alert.setTitle('Échoué');
         toaster.setMessage('Email incorrect');
         toaster.present();
       }
    })
  }
 }
}
