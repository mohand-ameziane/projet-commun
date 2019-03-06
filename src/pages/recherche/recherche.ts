import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { RequestsProvider } from '../../providers/requests/requests';
import { connreq } from '../../models/request';
import firebase from 'firebase';

/**
 * Generated class for the RecherchePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recherche', 
  templateUrl: 'recherche.html',
})
export class RecherchePage {
  //filtrage de utilistaeur un tableu 
  newrequest  = {} as connreq;
  filteredusers = [];
  temparr = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
               public userservice: UserProvider, public alertCtrl: AlertController,
               public requestservice: RequestsProvider) {
   // utiliser la methode (getallusers) qui renvoi un tableau d'utilistaeur 
   // stocké le resultae de cette methode dans deux tableau defirenat 
   this.userservice.getallusers().then((res: any) => {
    this.filteredusers = res;
    this.temparr = res;
 })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecherchePage');
  }
// faire la recherche d'un utilisateur avec sont nom mais apres je vais change avec son universite 
  searchuser(searchbar) {
    this.filteredusers = this.temparr;
    var q = searchbar.target.value;
    if (q.trim() == '') {
      return;
    }
 
    this.filteredusers = this.filteredusers.filter((v) => {
      if (v.displayName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
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

}
