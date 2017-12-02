import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ItemService } from '../../app/services/item.service';
import { ItemChecklistPage } from '../item-checklist/item-checklist';


/**
 * Generated class for the ItemDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html',
})
export class ItemDetailsPage {

  public item: any;
  public result: any;
  public editState: boolean = false;
  public itemToEdit: any;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, private itemService: ItemService) {
    this.item = navParams.get('item');

    this.item.finalbangles = this.item.bangles - this.item.banglesold;
    this.item.finalbracelets = this.item.bracelets - this.item.braceletsold;
    this.item.finallockets = this.item.lockets - this.item.locketsold;
    this.item.finalearrings = this.item.earrings - this.item.earringsold;
    this.item.finaljhumka = this.item.jhumka - this.item.jhumkasold;
    this.item.finalnecklace = this.item.necklace - this.item.necklacesold;
  }

  deleteItem(itemId){
    this.editState = false;
    this.itemToEdit = null;
    this.itemService.deleteItem(itemId).subscribe(data => {
      this.result = data;
    });
    this.navCtrl.push(ItemChecklistPage);    
  }
  
  editItem($event, item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  updateItem() {
    this.itemService.updateItem(this.itemToEdit).subscribe(data => {
      this.result = data;
    });
    this.editState = false;
    this.itemToEdit = null;
    this.navCtrl.push(ItemChecklistPage);
  }
}

