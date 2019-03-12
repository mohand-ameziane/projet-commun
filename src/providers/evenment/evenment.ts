
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
/*
  Generated class for the EvenmentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EvenmentProvider {

  firedata2=firebase.database().ref('/events');

  constructor(public afAuth: AngularFireAuth) {
    console.log('Hello EvenmentProvider Provider');
  }
  getallevents() {
    var promise = new Promise((resolve, reject) => {
      this.firedata2.orderByChild('uid').once('value', (snapshot) => {
        let userdata = snapshot.val();
        let temparr = [];
        for (var key in userdata) {
          temparr.push(userdata[key]);
        }
        resolve(temparr);
      }).catch((err) => {
        reject(err);
      })
    })
    return promise;
  }

}
