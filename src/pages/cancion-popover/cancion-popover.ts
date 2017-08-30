import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';

/**
 * Generated class for the CancionPopoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cancion-popover',
  templateUrl: 'cancion-popover.html',
})
export class CancionPopoverPage {

  public volumen: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewController: ViewController, public events: Events) {
      this.volumen = 100;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancionPopoverPage');
  }

  onRangeChange(event){
    this.events.publish('cambio:volumen', this.volumen);
  }

  close(){
    this.viewController.dismiss();
  }

}
