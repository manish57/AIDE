import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-aboutme',
  templateUrl: 'aboutme.html',
})
export class AboutmePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  home() {
    this.navCtrl.push(HomePage);
  }

}
