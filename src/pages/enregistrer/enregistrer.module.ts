import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnregistrerPage } from './enregistrer';

@NgModule({
  declarations: [
  EnregistrerPage,
  ],
  imports: [
    IonicPageModule.forChild(EnregistrerPage),
  ],
})
export class EnregistrerPageModule {}
