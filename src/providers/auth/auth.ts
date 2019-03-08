
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from "../../models/user";

@Injectable()
export class AuthProvider {

  constructor(public afAuth : AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }
  async login(user : User){
    var promise =new Promise((resolve, rejecte)=>{
      this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(user.email,  user.pasword).then(()=>{
        resolve(true);
      }).catch((err)=>{
        rejecte(err);
      })
    })
    return promise;
  }

}
