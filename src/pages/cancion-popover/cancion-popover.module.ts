import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancionPopoverPage } from './cancion-popover';

@NgModule({
  declarations: [
    CancionPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(CancionPopoverPage),
  ],
  exports: [
    CancionPopoverPage
  ]
})
export class CancionPopoverPageModule {}
