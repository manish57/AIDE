import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ContactsService} from '../../app/services/contacts.service';
import {ContactslistPage} from '../contactslist/contactslist';

/**
 * Generated class for the ContactDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-details',
  templateUrl: 'contact-details.html',
})
export class ContactDetailsPage {
  public contact: any;
  public result: any;
  public editState: boolean = false;
  public contactToEdit: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private contactsService: ContactsService) {
    this.contact = navParams.get('contact');
  }

  deleteContact(contactId){
    this.editState = false;
    this.contactToEdit = null;
    this.contactsService.deleteContact(contactId).subscribe(data => {
      this.result = data;
    });
    this.navCtrl.push(ContactslistPage);    
  }

  editContact($event, contact) {
    this.editState = true;
    this.contactToEdit = contact;
  }

  updateContact() {
    this.contactsService.updateContact(this.contactToEdit).subscribe(data => {
      this.result = data;
    });
    this.editState = false;
    this.contactToEdit = null;
    this.navCtrl.push(ContactslistPage);
  }

}
