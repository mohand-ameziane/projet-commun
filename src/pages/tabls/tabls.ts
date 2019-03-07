import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvenmentPage } from '../evenment/evenment';



/**
 * Generated class for the TablsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabls',
  templateUrl: 'tabls.html',
})
export class TablsPage {
  tab1: string='HomePage';
  tab2: string='MessagePage';
  tab3: string='EvenmentPage';
  tab4: string='ProfilPage';
  tab5: string='RecherchePage';

  constructor() {
  }

 
}
