import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';

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
	
	public buttonColor : string[] = ['lightblue','lightblue','lightblue','lightblue','lightblue'];
	public homme : string = 'lightblue';
	public femme : string = 'lightblue';
        private annee : string[]  = ['Licence 1', 'Licence 2', 'Licence 3', 'Master 1', 'Master 2'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
  }
  allepageinformation(){
    this.navCtrl.push('HomePage');
  }
  
  addEventAnnee(i){
	this.buttonColor[i] = 'blue';
	this.negateOtherColor(i);
  }

  negateOtherColor(i):void{
	  for(var k=0;k<5;k++){
		if(k!=i){
			this.buttonColor[k]='lightblue';
		}
	  }
  }
  
  
  addEventHomme(){
	this.homme='blue';
	this.femme='lightblue';
  }
  
  addEventFemme(){
	this.femme='blue';
	this.homme='lightblue';
	  
  }
  
  register( user : User ){
    alert(user.pseudo);
  }

 

}
