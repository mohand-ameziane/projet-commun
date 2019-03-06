import { Component , NgZone} from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ImghandlerProvider } from '../../providers/imghandler/imghandler';
import { UserProvider } from '../../providers/user/user';
import { TablsPage } from '../tabls/tabls';
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
  private tabSexe : string[] = ['Homme','Femme'];

  imgurl = 'https://www.google.com/search?q=photo+fille&tbm=isch&source=iu&ictx=1&fir=K5wsrK27ivYhfM%253A%252CcEm1lNlPthSrhM%252C_&usg=AI4_-kTtZ9DwfPAqRkFh25eNnXpRdjmsiw&sa=X&ved=2ahUKEwiiuf-V4M3gAhUNFRQKHdHrCCUQ9QEwCXoECAIQFg#imgrc=K5wsrK27ivYhfM:';
  moveon = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public imgservice: ImghandlerProvider,
    public zone: NgZone, public userservice: UserProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    
  }

  chooseimage() {
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    })
    loader.present();
    this.imgservice.uploadimage().then((uploadedurl: any) => {
      loader.dismiss();
      this.zone.run(() => {
        this.imgurl = uploadedurl;
        this.moveon = false;
      })
    })
  }

  updateproceed() {
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    })
    loader.present();
    this.userservice.updateimage(this.imgurl).then((res: any) => {
      loader.dismiss();
      if (res.success) {
        this.navCtrl.setRoot('TablsPage');
      }
      else {
        alert(res);
      }
    })
  }
 
  proceed() {
    this.navCtrl.setRoot('TablsPage');
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
