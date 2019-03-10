
import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { connreq } from '../../models/request';
import { UserProvider } from '../user/user';
import firebase from 'firebase';
 

/*
  Generated class for the RequestsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestsProvider {
  firereq = firebase.database().ref('/invetation');
  firefriends = firebase.database().ref('/amis');
  userdetails;
  myfriends;

  constructor(public userservice: UserProvider, public events: Events) {
  }
// envoyer la demande d'ajoute a list amis 
  sendrequest(req: connreq) {
    var promise = new Promise((resolve, reject) => {
      this.firereq.child(req.recipient).push({
      sender: req.sender
      }).then(() => {
        resolve({ success: true });
        }).catch((err) => {
          resolve(err);
    })
    })
    return promise;  
  }

// la methode de destination de l'envoi de demande de list amis // appele a cette methode dans homepage et recherchepge 
//comparaison des liste des utilisateur qui demande ajoute a list amis et les personne demmande son dans le tableau  (this.userdetails = [];)
  getmyrequests() {
    let allmyrequests;
    var myrequests = [];
    this.firereq.child(firebase.auth().currentUser.uid).on('value', (snapshot) => {
      allmyrequests = snapshot.val();
      myrequests = [];
      for (var i in allmyrequests) {
        myrequests.push(allmyrequests[i].sender);
      }
      this.userservice.getallusers().then((res) => {
        var allusers = res;
        this.userdetails = [];
        for (var j in myrequests)
          for (var key in allusers) {
            if (myrequests[j] === allusers[key].uid) {
              this.userdetails.push(allusers[key]);
            }
          }
        this.events.publish('gotrequests');
      })
 
  })
}
// la methode d'ajoute un etulisitaeur a notre base de donnée
acceptrequest(buddy) {
  var myfriends = [];
  var promise = new Promise((resolve, reject) => {
    this.firefriends.child(firebase.auth().currentUser.uid).push({
      uid: buddy.uid
    }).then(() => {
      this.firefriends.child(buddy.uid).push({
        uid: firebase.auth().currentUser.uid
      }).then(() => {
        this.deleterequest(buddy).then(() => {
        resolve(true);
      })
      
      }).catch((err) => {
        reject(err);
       })
      }).catch((err) => {
        reject(err);
    })
  })
  return promise;
}
// supprime l'invertation apres avoir accepete ou seprimme
deleterequest(buddy) {
  var promise = new Promise((resolve, reject) => {
   this.firereq.child(firebase.auth().currentUser.uid).orderByChild('sender').equalTo(buddy.uid).once('value', (snapshot) => {
        let somekey;
        for (var key in snapshot.val())
          somekey = key;
        this.firereq.child(firebase.auth().currentUser.uid).child(somekey).remove().then(() => {
          resolve(true);
        })
       })
        .then(() => {
        
      }).catch((err) => {
        reject(err);
      })
  })
  return promise; 
}  


//methode recuperation liste amis a chaque connexion 
getmyfriends() {
  let friendsuid = [];
  this.firefriends.child(firebase.auth().currentUser.uid).on('value', (snapshot) => {
    let allfriends = snapshot.val();
    this.myfriends = [];
    for (var i in allfriends)
      friendsuid.push(allfriends[i].uid);
      
    this.userservice.getallusers().then((users) => {
      this.myfriends = [];
      for (var j in friendsuid)
        for (var key in users) {
          if (friendsuid[j] === users[key].uid) {
            this.myfriends.push(users[key]);
          }
        }
      this.events.publish('friends');
    }).catch((err) => {
      alert(err);
    })
  
  })
}  

}
