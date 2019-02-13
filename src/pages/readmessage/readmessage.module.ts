import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadMessagePage } from './readmessage';

@NgModule({
  declarations: [
    ReadMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(ReadMessagePage),
  ],
})
export class ReadMessagePageModule {}
