import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth";
import { InformationPage } from '../information/information';

@IonicPage()
@Component({
  selector: 'page-enregistrer',
  templateUrl: 'enregistrer.html',
})
export class EnregistrerPage {
  user = {} as User;

  constructor(private afAuth :AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }


  public doRegister(user : User){
     try{
    if(user.email.includes("@univ-paris1.fr")){
        //const resul = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.pasword);
        //console.log(resul);
        this.navCtrl.push('InformationPage');
    }
    else{
        window.alert("Veuillez entrer un bon email");
    }
    
      }
      
      

  catch(e){
    console.error(e);
  }
  }
  

}
