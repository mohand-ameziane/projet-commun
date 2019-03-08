import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth";
import { InformationPage } from '../information/information';
import { UserProvider } from "../../providers/user/user";
import { HomePage } from '../home/home';
import { TablsPage } from '../tabls/tabls';

@IonicPage()
@Component({
  selector: 'page-enregistrer',
  templateUrl: 'enregistrer.html',
})
export class EnregistrerPage {
 // user = {} as User;
 newuser = {
  email:'',
  pasword:'',
  name:''
  
} 

  constructor(//private afAuth :AngularFireAuth,
              public navCtrl: NavController, public navParams: NavParams, public userservice: UserProvider,
              public loadingCtrl :LoadingController, public toastCtrl: ToastController ) {
  }
  
  register(){
    var toaster = this.toastCtrl.create({
      duration: 3000,
      position: 'bottom'
    });
    if(this.newuser.email=='' || this.newuser.pasword=='' || this.newuser.name==''){
       toaster.setMessage('Veuillez entrer des données valides');
       toaster.present();
    }
    else if(this.newuser.pasword.length<7){
      toaster.setMessage('Votre mot de passe doit contenir au moins 6 caractères');
      toaster.present();
    }

   else if(!this.newuser.email.includes('@univ-paris1.fr') ){
        toaster.setMessage('Merci de donner votre Email Universitaire');
        toaster.present();
    }
    else{
      let loader=this.loadingCtrl.create({
        content: 'Chargement'
      });
        loader.present();
     this.userservice.ajouteuser(this.newuser).then((res: any)=>{
       loader.dismiss();
       if(res.success)
         this.navCtrl.push('InformationPage');
       else
          alert('Error'+res);
     })
    }
  }

}
