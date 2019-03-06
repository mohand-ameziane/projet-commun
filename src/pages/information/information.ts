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
	public sexeColor : string[] = [ 'lightblue','lightblue' ];
  private annee : string[]  = ['Licence 1', 'Licence 2', 'Licence 3', 'Master 1', 'Master 2'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
  }
  allepageinformation(){
    this.navCtrl.push('HomePage');
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
  register( user : User ){
  }

 

}
