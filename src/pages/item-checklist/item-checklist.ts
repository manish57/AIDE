import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { File } from '@ionic-native/file';
import {ItemService} from '../../app/services/item.service';
import {ItemDetailsPage} from '../item-details/item-details';
import {AddItemPage} from '../add-item/add-item';
import {HomePage} from '../home/home';
import * as papa from 'papaparse';

/**
 * Generated class for the ItemChecklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-checklist',
  templateUrl: 'item-checklist.html',
})
export class ItemChecklistPage {

  items: any;
  constructor(public navCtrl: NavController, private file: File, public platform: Platform, public navParams: NavParams, private itemService: ItemService) {
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

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    })
  }
  
  ionViewWillEnter(){
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    })        
  }

  itemSelected(event, item){
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  addItem(){
    this.navCtrl.push(AddItemPage);
  }

  downloadCSV() {
    let csv = papa.unparse({
      fields: ["city", "todaysdate","bangles","banglesold"," ",
      "bracelets","braceletsold"," ",
      "earrings","earringsold"," ",
      "jhumka","jhumkasold"," ",
      "necklace","necklacesold"],
      data: this.items
    });
 
    /*// Dummy implementation for Desktop download purpose
    var blob = new Blob([csv]);
    var a = window.document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = "items.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);*/

    var blob = new Blob([csv]);
    let fileName = "items.csv"
    this.file.writeFile(this.file.externalRootDirectory, fileName, blob)
      .then(
      _ => {
        alert('File saved @'+this.file.externalRootDirectory)
      }
      )
      .catch(
      err => {

        this.file.writeExistingFile(this.file.externalRootDirectory, fileName, blob)
          .then(
          _ => {
            alert('File saved @'+this.file.externalRootDirectory)
          }
          )
          .catch(
          err => {
            alert(err+'Failure'+this.file.externalRootDirectory)
          }
          )
      }
      )
  }

}

