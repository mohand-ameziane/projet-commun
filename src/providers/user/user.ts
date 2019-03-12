
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';



/*
  Generated class for the UserProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
    firedata= firebase.database().ref('/IonicApp');
  
    
    
  constructor(public afAuth: AngularFireAuth) {
    console.log('Hello UserProvider Provider');
  }
  /*
  ajoute un utilisateur a la base de donnes 
  */
 

  ajouteuser(newuser ){
    var promise= new Promise((resolve, rejecte)=>{
         this.afAuth.auth.createUserWithEmailAndPassword(newuser.email, newuser.pasword).then(()=>{
           this.afAuth.auth.currentUser.updateProfile({
             displayName : newuser.name,
             universitename : newuser.universite,
             filiername : newuser.filier,
             photoURL:'https://www.google.com/search?q=photo+fille&tbm=isch&source=iu&ictx=1&fir=K5wsrK27ivYhfM%253A%252CcEm1lNlPthSrhM%252C_&usg=AI4_-kTtZ9DwfPAqRkFh25eNnXpRdjmsiw&sa=X&ved=2ahUKEwiiuf-V4M3gAhUNFRQKHdHrCCUQ9QEwCXoECAIQFg#imgrc=K5wsrK27ivYhfM:',
           }).then(()=>{
             this.firedata.child(this.afAuth.auth.currentUser.uid).set({
               uid: this.afAuth.auth.currentUser.uid,
               displayName : newuser.name,
               universitename : newuser.universite,
               filiername : newuser.filier,
               photoURL:'https://www.google.com/search?q=photo+fille&tbm=isch&source=iu&ictx=1&fir=K5wsrK27ivYhfM%253A%252CcEm1lNlPthSrhM%252C_&usg=AI4_-kTtZ9DwfPAqRkFh25eNnXpRdjmsiw&sa=X&ved=2ahUKEwiiuf-V4M3gAhUNFRQKHdHrCCUQ9QEwCXoECAIQFg#imgrc=K5wsrK27ivYhfM:'
             }).then(()=>{
               resolve({ success: true});
             }).catch((err)=>{
              rejecte(err);
             })
           }).catch((err)=>{
              rejecte(err);
           })
         }).catch((err)=>{
           rejecte(err);
         })
    })
    return promise;
  }

/**
 * modefier mot de passe avec un message envoiyer a l'email
 * 
 * @param email 
 */
  renesialiseMotPasse(email){
    var promise=new Promise((resolve, reject)=>{
      firebase.auth().sendPasswordResetEmail(email).then(()=>{
        resolve({ success: true});
      }).catch((err)=>{
        reject(err);
      })
    })
   return promise;
  }

  updateimage(imageurl) {
    var promise = new Promise((resolve, reject) => {
        this.afAuth.auth.currentUser.updateProfile({
            displayName: this.afAuth.auth.currentUser.displayName,
            universitename: this.afAuth.auth.currentUser.universitename,
            filiername : this.afAuth.auth.currentUser.filiername,
            photoURL: imageurl      
        }).then(() => {
            firebase.database().ref('/IonicApp/' + firebase.auth().currentUser.uid).update({
            displayName: this.afAuth.auth.currentUser.displayName,
            photoURL: imageurl,
            uid: firebase.auth().currentUser.uid
            }).then(() => {
                resolve({ success: true });
                }).catch((err) => {
                    reject(err);
                })
        }).catch((err) => {
              reject(err);
           })  
    })
    return promise;
}
//recupere un utilisateur
getuserdetails() {
  var promise = new Promise((resolve, reject) => {
  this.firedata.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
    resolve(snapshot.val());
  }).catch((err) => {
    reject(err);
    })
  })
  return promise;
}
//nouveau nom
updatedisplayname(newname) {
  var promise = new Promise((resolve, reject) => {
    this.afAuth.auth.currentUser.updateProfile({
    displayName: newname,
    photoURL: this.afAuth.auth.currentUser.photoURL,
    universitename: this.afAuth.auth.currentUser.universitename,
    filiername : this.afAuth.auth.currentUser.filiername,
  }).then(() => {
    this.firedata.child(firebase.auth().currentUser.uid).update({
      displayName: newname,
      photoURL: this.afAuth.auth.currentUser.photoURL,
      uid: this.afAuth.auth.currentUser.uid
    }).then(() => {
      resolve({ success: true });
    }).catch((err) => {
      reject(err);
    })
    }).catch((err) => {
      reject(err);
  })
  })
  return promise;
}

// fonction qui recuper les utilisteur et renvoi un tableau d'utilisateur 
getallusers() {
  var promise = new Promise((resolve, reject) => {
    this.firedata.orderByChild('uid').once('value', (snapshot) => {
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