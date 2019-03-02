import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";
import { AuthProvider } from "../../providers/auth/auth";
import { RenMotPassePage } from '../ren-mot-passe/ren-mot-passe';


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
    public navCtrl: NavController, public navParams: NavParams) {
  }

login(){
  this.authservic.login(this.user).then((res: any)=>{
     if(!res.code){
      this.navCtrl.setRoot('TablsPage'); 
     }
  })
}
  
  register(){
    this.navCtrl.push('EnregistrerPage');
  
  }
  valide(){
    this.navCtrl.push('RenMotPassePage');
  }

}
