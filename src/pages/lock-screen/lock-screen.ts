import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { HomePage } from '../home/home';
/**
 * Generated class for the LockScreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lock-screen',
  templateUrl: 'lock-screen.html',
})
export class LockScreenPage {

  constructor(public navCtrl: NavController, private faio: FingerprintAIO) {
  }
 
  ionViewWillEnter() {
    this.faio.show({
      clientId: 'Fingerprint-Demo',
      clientSecret: 'password', // Only Android
      localizedFallbackTitle: 'Use Pin', // Only iOS
      localizedReason: 'Please authenticate' // Only iOS
    })
      .then((result: any) => {
        this.navCtrl.setRoot(HomePage);
      })
      .catch((error: any) => {
        console.log('err: ', error);
      });
  }
}
