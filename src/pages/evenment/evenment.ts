import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import firebase from 'firebase';




@IonicPage()
@Component({
  selector: 'page-evenment',
  templateUrl: 'evenment.html',
})
export class EvenmentPage {

  items;
  ref = firebase.database().ref('items/');
  constructor(
      private modalControler: ModalController
      ){

      }

presentModal(){
  const MyModal = this.modalControler.create('ModalPage');
  MyModal.present();

}
}
