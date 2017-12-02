import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ContactsService} from '../../app/services/contacts.service';
import {ContactslistPage} from '../contactslist/contactslist';

@IonicPage()
@Component({
  selector: 'page-add-contacs',
  templateUrl: 'add-contacs.html',
})
export class AddContacsPage{
  public firstname: String;
  public lastname: String;
  public phoneno: String;
  public emailid: String;
  public city: String;
  public address: String;
  public location: String;
  public note: String;
  public birthday: String;
  public result: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private contactsService: ContactsService) {
  
  }

  onSubmit() {
    var contact = {
      firstname: this.firstname,
      lastname: this.lastname,
      phoneno: this.phoneno,
      emailid: this.emailid,
      city: this.city,
      address: this.address,
      location: this.location,
      note: this.note,
      birthday: this.birthday
    }

    // Add Contact
    this.contactsService.addContact(contact).subscribe(data => {
      this.result = data;
    });

    this.navCtrl.push(ContactslistPage);
  }

}
