import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


/**
 * Generated class for the ContactoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {

  public base64Image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertController: AlertController, public camera: Camera) {
  }

  ionViewDidLoad() {
  }

  enviar(){
    let alert = this.alertController.create({
      title: 'Contacto',
      subTitle: 'Tu petición ha sido enviada exitosamente!',
      buttons: ['Sexo Sensual']
    });
    alert.present();
  }

  capture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    })
  }

}
