import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import firebase from 'firebase';
import { AngularFireAuth } from "angularfire2/auth";

/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {
    user = {} as User;
    value;
  firedata= firebase.database().ref('/IonicApp');
	
	public buttonColor : string[] = ['lightblue','lightblue','lightblue','lightblue','lightblue'];
	public sexeColor : string[] = [ 'lightblue','lightblue' ];
  private annee : string[]  = ['Licence 1', 'Licence 2', 'Licence 3', 'Master 1', 'Master 2'];
  private sexe : string[] = ['Homme','Femme'];

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth :AngularFireAuth,) {
    this.value=navParams.get('usr');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
  }

  addEvent(i, tab) :void{
	  tab[i] = 'blue';
	  this.negateOtherColor(i,tab);
  }

  negateOtherColor(i, tab):void{
	  for(var k=0;k<tab.length;k++){
		if(k!=i){
			tab[k]='lightblue';
		}
	  }
  }

  goToBefore(){
    this.navCtrl.pop();
  }

  FinishRegister(user : User){
     var promise= new Promise((resolve, rejecte)=>{
        this.afAuth.auth.createUserWithEmailAndPassword(this.value[1], this.value[2]).then(()=>{
          this.firedata.child(this.afAuth.auth.currentUser.uid).set({
            uid: this.afAuth.auth.currentUser.uid,
            pseudo : this.value[0],
            email : this.value[1],
            pasword : this.value[2],
            universite : user.universite,
            filiere : user.filiere,
            anneeetude : (this.buttonColor.indexOf('blue')==-1)? '':this.annee[this.buttonColor.indexOf('blue')],
            sexe : (this.sexeColor.indexOf('blue')==-1)? '':this.sexe[this.sexeColor.indexOf('blue')],
          }).then(()=>{
            resolve({ success: true});
          }).catch((err)=>{
            rejecte(err);
          })
        }).catch((err)=>{
          rejecte(err);
        })

      })
      return promise;

  }

 

}
