import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/merge';

import { PlaylistsPage } from '../playlists/playlists';

import { DeezerServiceProvider } from '../../providers/deezer-service/deezer-service';

/**
 * Generated class for the PerfilesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-perfiles',
  templateUrl: 'perfiles.html',
})
export class PerfilesPage {

  public users: any;
  public loader: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public ds: DeezerServiceProvider, public loadingController: LoadingController) {
      this.users = [];
      this.loader = this.loadingController.create({
        content: 'Por favor espere...'
      });
  }

  goToPlaylist(user){
    this.navCtrl.push(PlaylistsPage, { user: user });
  }

  ionViewDidLoad() {
    this.loader.present();
    this.loader.dismiss();

    this.ds.getUsers().subscribe( userIDs => {
      let sources = userIDs.map(userID => this.ds.getUserDetail(userID));
      Observable.merge(...sources).subscribe(
        data => this.users.push(data),
        error => console.log(error),
        () => this.loader.dismiss()
      );
    });
  }

}
