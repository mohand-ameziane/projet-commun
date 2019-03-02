import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

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
   //filtrage de utilistaeur un tableu 
   filteredusers = [];
   temparr = [];
 

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userservice: UserProvider) {
       // utiliser la methode (getallusers) qui renvoi un tableau d'utilistaeur 
   // stocké le resultae de cette methode dans deux tableau defirenat 
   this.userservice.getallusers().then((res: any) => {
    this.filteredusers = res;
    this.temparr = res;
 })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListProfilPage');
  }

  searchuser(searchbar) {
    this.filteredusers = this.temparr;
    var q = searchbar.target.value;
    if (q.trim() == '') {
      return;
    }
 
    this.filteredusers = this.filteredusers.filter((v) => {
      if (v.displayName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })
  }

}
