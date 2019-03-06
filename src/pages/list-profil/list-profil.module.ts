import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListProfilPage } from './list-profil';

@NgModule({
  declarations: [
    ListProfilPage,
  ],
  imports: [
    IonicPageModule.forChild(ListProfilPage),
  ],
})
export class ListProfilPageModule {}
