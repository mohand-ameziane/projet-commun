
import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Events } from 'ionic-angular';
/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//forniseur des message 
@Injectable()
export class ChatProvider {
  firebuddychats = firebase.database().ref('/message');
  buddy: any;
  buddymessages = [];
  constructor(public events: Events) {
    
  }
 
  initializebuddy(buddy) {
    this.buddy = buddy;
  }
  
 // envoi un message il va l'enregistre dans la base de donnes 
  addnewmessage(msg) {
    if (this.buddy) {
      var promise = new Promise((resolve, reject) => {
        this.firebuddychats.child(firebase.auth().currentUser.uid).child(this.buddy.uid).push({
          sentby: firebase.auth().currentUser.uid,
          message: msg,
          timestamp: firebase.database.ServerValue.TIMESTAMP
        }).then(() => {
          this.firebuddychats.child(this.buddy.uid).child(firebase.auth().currentUser.uid).push({
            sentby: firebase.auth().currentUser.uid,
            message: msg,
            timestamp: firebase.database.ServerValue.TIMESTAMP
          }).then(() => {
            resolve(true);
            }).catch((err) => {
              reject(err);
          })
        })
      })
      return promise;
    }
  }
 // recuperation le message enregestre dans la base de donnée
  getbuddymessages() {
    
    let temp;
    this.firebuddychats.child(firebase.auth().currentUser.uid).child(this.buddy.uid).on('value', (snapshot) => {
      this.buddymessages = [];
      temp = snapshot.val();
      for (var tempkey in temp) {
        this.buddymessages.push(temp[tempkey]);
      }
      this.events.publish('newmessage');
    })
  }

}
