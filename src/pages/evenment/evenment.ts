import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-evenment',
  templateUrl: 'evenment.html',
})
export class EvenmentPage {

  constructor(
      private modalControler: ModalController
      ){

      }

presentModal(){
  const MyModal = this.modalControler.create('ModalPage');
  MyModal.present();

}
}

