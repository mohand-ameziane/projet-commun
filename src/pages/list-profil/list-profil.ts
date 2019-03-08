import {Component, NgZone} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";

/**
 * Generated class for the ListProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-profil',
  templateUrl: 'list-profil.html',
})
export class ListProfilPage {

  avatar: string;
  displayName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public userservice: UserProvider, public zone: NgZone) {
    this.loaduserdetails();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListProfilPage');
  }

  loaduserdetails() {
    this.userservice.getuserdetails().then((res: any) => {
      this.displayName = res.displayName;
      this.zone.run(() => {
        this.avatar = res.photoURL;
      })
    })
  }

  public goToCriteres() :void {
    this.navCtrl.push("CriteresPage");
  }
}
