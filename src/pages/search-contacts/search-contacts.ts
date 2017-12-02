import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ContactsService} from '../../app/services/contacts.service';
import {ContactDetailsPage} from '../contact-details/contact-details';

/**
 * Generated class for the SearchContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-contacts',
  templateUrl: 'search-contacts.html',
})
export class SearchContactsPage {

  contacts: any;
  searchResult0: any;  
  searchResult: any;
  searchResult1: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private contactsService: ContactsService) {
  }
  
  ngOnInit() {
    this.contactsService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
    })
  }
  
  ionViewWillEnter(){
    this.contactsService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
    })        
  }

  contactSelected(event, contact){
    this.navCtrl.push(ContactDetailsPage, {
      contact: contact
    });
  }

  searchByLocation(locstr){
    this.contactsService.searchByLocation(locstr).subscribe(result => {
      this.searchResult0 = result;
    });
  }

  searchByCity(citystr){
    this.contactsService.searchByCity(citystr).subscribe(result => {
      this.searchResult = result;
    });
  }
  
  searchByLastname(lstr){
    this.contactsService.searchByLastname(lstr).subscribe(result => {
      this.searchResult1 = result;
    });
  }
}