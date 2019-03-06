import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { EvenmentPage } from '../evenment/evenment';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  private dateOfEvent :String;
  private maxDateOfPicker : String;
  private minDateOfPicker : String;
  TitreEv = '';
  DescEvent = '';
 
  events: AngularFireList<any>;


  constructor(private navParams: NavParams, 
    private view: ViewController, 
    public navCtrl: NavController, 
    public af: AngularFireDatabase,
    public toastCtrl: ToastController) {

      this.events = af.list('/events')
      let aDate = new Date();
      aDate.setHours(aDate.getHours() - (aDate.getTimezoneOffset() / 60));
      this.maxDateOfPicker = aDate.toISOString();
      this.dateOfEvent = aDate.toISOString();

      aDate.setHours(aDate.getHours()-5)
      this.minDateOfPicker = aDate.toISOString();

  }

  addEvent(TitreEv, DescEvent, dateOfEvent){
    this.events.push({

      TitreEv: TitreEv,
      DescEvent: DescEvent,
      dateOfEvent : dateOfEvent,
    
    }).then(newEvent => {
      this.navCtrl.push('EvenmentPage');
    })
    const toast = this.toastCtrl.create({
      message: 'Événement ajouté',
      duration: 100
    });
    toast.present();
  }

  //https://www.youtube.com/watch?v=dth3aq_QPzU

  closeModal(){
    this.view.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }


}
