import { EvenmentPage } from './../evenment/evenment';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Item, Modal } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
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
    public af: AngularFireDatabase,) {
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
      this.navCtrl.push(EvenmentPage);
    })
  }




  closeModal(){
    this.view.dismiss();
  }
/*
   addItem(item: Item){
    this.event.addEvent(item).then(ref => {
      console.log(ref.key);
    })
  }*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }


}


// Ouvire calandrier + Ajout event