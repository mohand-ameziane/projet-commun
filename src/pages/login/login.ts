import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from "../../models/user";
import { AuthProvider } from "../../providers/auth/auth";



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(public authservic : AuthProvider,
    public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController ) {
  }

login(){
  var toaster = this.toastCtrl.create({
    duration: 3000,
    position: 'bottom'
  });
  
  if(this.user.email=='' || !this.user.email.includes('@etu.univ-paris1.fr') ){
    toaster.setMessage('Erreur dans votre email');
    toaster.present();
 }
 
 else if ( this.user.pasword=='' || this.user.pasword.length<7 ){
  toaster.setMessage('Erreur dans votre mot de passe');
  toaster.present();
 }
 
 else{
  this.authservic.login(this.user).then((res: any)=>{
     if(!res.code){
      this.navCtrl.setRoot('TablsPage'); 
     }else{
      toaster.setMessage('Merci de donner votre Email Universitaire');
      toaster.present();
     }
  })
}
}
  
  register(){
    this.navCtrl.push('EnregistrerPage');
  
  }
  valide(){
    this.navCtrl.push('RenMotPassePage');
  }

}
