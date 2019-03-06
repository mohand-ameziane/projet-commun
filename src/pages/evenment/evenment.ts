import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import firebase from 'firebase';
import { UserProvider } from '../../providers/user/user';




@IonicPage()
@Component({
  selector: 'page-evenment',
  templateUrl: 'evenment.html',
})
export class EvenmentPage {
  //tableu liste des evenment  
  filteredusers = [];

  items;
  ref = firebase.database().ref('items/');
  constructor( public navCtrl: NavController ,private modalControler: ModalController, 
               public userservice: UserProvider)
  {
    this.userservice.getToutEvenment().then((res: any) => {
      this.filteredusers = res;
      
   })

  }
      ionViewDidLoad() {
        console.log('ionViewDidLoad EvenmentPage');
      }


presentModal(){
  const MyModal = this.modalControler.create('ModalPage');
  MyModal.present();

}
}