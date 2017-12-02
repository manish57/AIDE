import { Component } from '@angular/core';
import { File } from '@ionic-native/file';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import {ContactsService} from '../../app/services/contacts.service';
import {ContactDetailsPage} from '../contact-details/contact-details';
import {AddContacsPage} from '../add-contacs/add-contacs';
import {HomePage} from '../home/home';
import { SearchContactsPage } from '../search-contacts/search-contacts';
import * as papa from 'papaparse';

@IonicPage()
@Component({
  selector: 'page-contactslist',
  templateUrl: 'contactslist.html',
})
export class ContactslistPage {
  
  contacts: any;
  searchResult: any;
  
  constructor(public navCtrl: NavController, private file: File, public platform: Platform, public navParams: NavParams, private contactsService: ContactsService) {
    platform.ready().then(()=>{
      platform.registerBackButtonAction(()=>this.myHandlerFunction());
    }) 
  }
  
  myHandlerFunction(){
    console.log("Done");
  }

  addContact(){
    this.navCtrl.push(AddContacsPage);
  }
  
  cont(){
    this.navCtrl.push(SearchContactsPage);
  }


  jumptoHome(){
    this.navCtrl.push(HomePage);
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

  searchContact(str){
    this.contactsService.searchContact(str).subscribe(result => {
      this.searchResult = result;
    });
  }

  downloadCSV() {
    let csv = papa.unparse({
      fields: ["firstname", "lastname","phoneno","emailid","birthday","address","city","location","note"],
      data: this.contacts
    });
    
    /*
    // Dummy implementation for Desktop download purpose
    var blob = new Blob([csv]);
    var a = window.document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = "contacts.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);*/
    var blob = new Blob([csv]);
    let fileName = "contacts.csv"
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
