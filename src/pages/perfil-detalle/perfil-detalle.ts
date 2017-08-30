import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PerfilDetallePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-perfil-detalle',
  templateUrl: 'perfil-detalle.html',
})
export class PerfilDetallePage {

  public user: any;
  public playlists: any;
  public totalCanciones: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewController: ViewController) {
      this.user = this.navParams.get('user');
      this.playlists = this.navParams.get('playlists');
      this.totalCanciones = 0;
      this.playlists.map( playlist => this.totalCanciones += playlist.nb_tracks);

      console.log("USER: ", this.user);
      console.log("PLAYLISTS: ", this.playlists);
  }

  ionViewDidLoad() {

  }

  close(){
    this.viewController.dismiss({
      retornar: "parametros al padre"
    });
  }

  goToDeezerProfile(link){
    console.log(this.user.link);
  }

}
