import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FeedbackPage } from '../feedback/feedback';
import { ContactslistPage } from '../contactslist/contactslist';
import { NotePage } from '../note/note';
import { AboutmePage } from '../aboutme/aboutme';
import { ItemChecklistPage } from '../item-checklist/item-checklist';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  
  }
  
  jumptoContactsPage() {
    this.navCtrl.push(ContactslistPage);
  }

  jumptoFeedbackPage() {
    this.navCtrl.push(FeedbackPage);
  }

  jumptoNotePage() {
    this.navCtrl.push(NotePage);
  }

  jumptoItemChecklistPage() {
    this.navCtrl.push(ItemChecklistPage);
  }

  aboutme(){
    this.navCtrl.push(AboutmePage);
  }
}
