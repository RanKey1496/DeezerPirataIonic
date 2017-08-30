import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TecnoPlayerComponent } from './tecno-player';

@NgModule({
  declarations: [
    TecnoPlayerComponent,
  ],
  imports: [
    IonicPageModule.forChild(TecnoPlayerComponent),
  ],
  exports: [
    TecnoPlayerComponent
  ]
})
export class TecnoPlayerComponentModule {}
