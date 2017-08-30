import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilesPage } from './perfiles';

@NgModule({
  declarations: [
    PerfilesPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilesPage),
  ],
  exports: [
    PerfilesPage
  ]
})
export class PerfilesPageModule {}
