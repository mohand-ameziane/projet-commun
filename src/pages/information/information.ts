import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
	
	public buttonColor : string[] = ['lightblue','lightblue','lightblue','lightblue','lightblue'];
	public homme : string = 'lightblue';
	public femme : string = 'lightblue';

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
  
 

}
