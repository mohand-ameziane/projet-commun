import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvenmentPage } from './evenment';

@NgModule({
  declarations: [
    EvenmentPage,
  ],
  imports: [
    IonicPageModule.forChild(EvenmentPage),
  ],
})
export class EvenmentPageModule {}
