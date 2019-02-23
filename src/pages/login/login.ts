import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";
import { HomePage } from '../home/home';

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

  constructor(private afAuth : AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }
  
  


 async login(user : User){
   try{
    const resul= this.afAuth.auth.signInWithEmailAndPassword(user.email,  user.pasword);
    console.log(resul);
    if(resul){
    this.navCtrl.setRoot('HomePage');
  }
  }
  catch(e){
    console.error(e);
  }
}
  
  GoToRegister(){
    this.navCtrl.push('EnregistrerPage');
  
  }
  
  GoToPasword(){
	this.navCtrl.push('PaswordPage');
  }

}
