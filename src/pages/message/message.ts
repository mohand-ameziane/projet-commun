import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events,AlertController } from 'ionic-angular';
import { RequestsProvider } from '../../providers/requests/requests';
import { ChatProvider } from '../../providers/chat/chat';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  myrequests;
  myfriends;
  constructor(public navCtrl: NavController, public navParams: NavParams, public requestservice: RequestsProvider,
               public events: Events, public alertCtrl: AlertController, public chatservice: ChatProvider) {
  }

 
  ionViewWillEnter() {
    this.requestservice.getmyrequests();
    this.requestservice.getmyfriends();
    this.myfriends = [];
    this.events.subscribe('gotrequests', () => {
      this.myrequests = [];
      this.myrequests = this.requestservice.userdetails;
    })
    this.events.subscribe('friends', () => {
      this.myfriends = [];
      this.myfriends = this.requestservice.myfriends; 
    })
  }
 
  ionViewDidLeave() {
    this.events.unsubscribe('gotrequests');
    this.events.unsubscribe('friends');
  }
 
  
  onMessage(){
	  this.navCtrl.push('ReadMessagePage');
  }
  //la fonction qui accepte une demande amis 
  accept(item) {
    this.requestservice.acceptrequest(item).then(() => {
 
      let newalert = this.alertCtrl.create({
        title: 'Friend added',
        subTitle: 'Tap on the friend to chat with him',
        buttons: ['Okay']
      });
      newalert.present();
    })
  }
 //la fonction qui refuse une demande amis 
  ignore(item) {
    this.requestservice.deleterequest(item).then(() => {
       alert('Request ignored');
    }).catch((err) => {
      alert(err);
    })
  }
// appre avoir accepte l'invetation tu peux commance de chaté avec 
  buddychat(buddy) {
    this.chatservice.initializebuddy(buddy);
    this.navCtrl.push('ReadMessagePage');
  }
}
