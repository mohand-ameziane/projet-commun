import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import firebase from 'firebase';
import { UserProvider } from '../../providers/user/user';




@IonicPage()
@Component({
  selector: 'page-evenment',
  templateUrl: 'evenment.html',
})
export class EvenmentPage {

  filteredusers = [];
  temparr = [];
  items;
  ref = firebase.database().ref(`events`);
  constructor(
    private modalControler: ModalController,public userservice: UserProvider
  ){

    this.userservice.getallevents().then((res: any) => {
      this.filteredusers = res;
      this.temparr = res;
    })

  }

  presentModal(){
    const MyModal = this.modalControler.create('ModalPage');
    MyModal.present();

  }



}
