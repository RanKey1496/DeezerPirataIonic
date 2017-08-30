import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/merge';

import { CancionesPage } from '../canciones/canciones';
import { PerfilDetallePage } from '../perfil-detalle/perfil-detalle';

import { DeezerServiceProvider } from '../../providers/deezer-service/deezer-service';

/**
 * Generated class for the PlaylistsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-playlists',
  templateUrl: 'playlists.html',
  providers: [ DeezerServiceProvider ]
})
export class PlaylistsPage {
  public playlists: any;
  public user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public ds: DeezerServiceProvider, public loadingController: LoadingController,
    public modalController: ModalController) {
      this.user = this.navParams.get('user');
      this.playlists = [];
  }

  goToCanciones(playlist){
    this.navCtrl.push(CancionesPage, { playlist: playlist });
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Por favor espere...'
    });
    loader.present();
    this.ds.getUserPlaylists(this.user.id).subscribe( data => {
      this.playlists = data.data;
      loader.dismiss();
    })
  }

  goToProfileDetail(user, playlists){
    let modal = this.modalController.create(PerfilDetallePage, {
      user: user,
      playlists: playlists
    });
    modal.present();
    modal.onDidDismiss(data => console.log(data));
  }

}
