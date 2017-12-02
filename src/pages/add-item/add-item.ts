import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import {ItemService} from '../../app/services/item.service';
import {ItemChecklistPage} from '../item-checklist/item-checklist';
import {HomePage} from '../home/home';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  public city: string;
  public result: any;
  public todaysdate: string;
  public bangles: number;
  public bracelets: number;
  public lockets: number;
  public earrings: number;
  public jhumka: number;
  public necklace: number;
  public note: string;
  public banglesold: number;
  public braceletsold: number;
  public locketsold: number;
  public earringsold: number;
  public jhumkasold: number;
  public necklacesold: number;
  
  constructor(public navCtrl: NavController, public platform: Platform, public navParams: NavParams, public itemService: ItemService) {
    platform.ready().then(()=>{
      platform.registerBackButtonAction(()=>this.myHandlerFunction());
    })
  }
  
  myHandlerFunction(){
    console.log("Done");
  }

  jumptoHome(){
    this.navCtrl.push(HomePage);
  }

  save() {
    var item = {
      city: this.city,
      note: this.note,
      todaysdate: this.todaysdate,
      bangles: this.bangles,
      bracelets: this.bracelets,
      lockets: this.lockets,
      earrings: this.earrings,
      jhumka: this.jhumka,
      necklace: this.necklace,
      banglesold: this.banglesold,
      braceletsold: this.braceletsold,
      locketsold: this.locketsold,
      earringsold: this.earringsold,
      jhumkasold: this.jhumkasold,
      necklacesold: this.necklacesold
    }

    this.itemService.addItem(item).subscribe(data => {
      this.result = data;
    });

    this.navCtrl.push(ItemChecklistPage);
  }

}
