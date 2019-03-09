import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { RequestsProvider } from '../../providers/requests/requests';
import { connreq } from '../../models/request';
import firebase from 'firebase';

/**
 * Generated class for the ListProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-profil',
  templateUrl: 'list-profil.html',
})
export class ListProfilPage {
  newrequest  = {} as connreq;
   //filtrage de utilistaeur un tableu 
   filteredusers = [];
   
 

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userservice: UserProvider,public requestservice: RequestsProvider, public alertCtrl: AlertController) {
       // utiliser la methode (getallusers) qui renvoi un tableau d'utilistaeur 
   // stocké le resultae de cette methode dans deux tableau defirenat 
   this.userservice.getallusers().then((res: any) => {
    this.filteredusers = res;
    
 })
  }
  
  //methode permetre d'envoiyer demande d'ajoute a liste amis
//L'instruction if permettant de vérifier si l'utilisateur connecté 
//et connreq et un interface (nouvelle requete)
sendreq(recipient) {
  this.newrequest.sender = firebase.auth().currentUser.uid;
  this.newrequest.recipient = recipient.uid;
  if (this.newrequest.sender === this.newrequest.recipient)
    alert('You are your friend always');
  else {
    let successalert = this.alertCtrl.create({
      title: 'Request sent',
      subTitle: 'Your request was sent to ' + recipient.displayName,
      buttons: ['ok']
    });
  // apppele la methode demande ajoute dans (equestservice)
    this.requestservice.sendrequest(this.newrequest).then((res: any) => {
      if (res.success) {
        successalert.present();
        let sentuser = this.filteredusers.indexOf(recipient);
        this.filteredusers.splice(sentuser, 1);
      }
    }).catch((err) => {
      alert(err);
    })
  }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListProfilPage');
  }

 

}
