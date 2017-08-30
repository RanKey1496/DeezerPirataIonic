import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, 
  PopoverController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/merge';

import { CancionPopoverPage } from '../cancion-popover/cancion-popover';

import { DeezerServiceProvider } from '../../providers/deezer-service/deezer-service';

/**
 * Generated class for the CancionesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-canciones',
  templateUrl: 'canciones.html',
  providers: [ DeezerServiceProvider ]
})
export class CancionesPage {

  public playlist: any;
  public songs: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public ds: DeezerServiceProvider, public loadingController: LoadingController,
    public popoverController: PopoverController) {
      this.playlist = this.navParams.get('playlist');
      this.songs = [];
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Por favor espere...'
    });
    loader.present();

    this.ds.getPlaylistSongs(this.playlist.id).subscribe( data => {
      this.songs = data.data;
      loader.dismiss();
    })
  }

  openCancionPopover(){
    let popover = this.popoverController.create(CancionPopoverPage);
    popover.present({
      ev: event
    });
  }

}
