import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { File } from '@ionic-native/file';

import { HomePage } from '../pages/home/home';
import { ContactslistPage } from '../pages/contactslist/contactslist';
import { ContactDetailsPage } from '../pages/contact-details/contact-details';
import { AddContacsPage } from '../pages/add-contacs/add-contacs';
import { SearchContactsPage } from '../pages/search-contacts/search-contacts';
import { FeedbackPage } from '../pages/feedback/feedback';
import { FeedbackDetailsPage } from '../pages/feedback-details/feedback-details';
import { AddFeedbackPage } from '../pages/add-feedback/add-feedback';
import { NotePage } from '../pages/note/note';
import { AddNotePage } from '../pages/add-note/add-note';
import { NoteDetailsPage } from '../pages/note-details/note-details';
import { ItemChecklistPage } from '../pages/item-checklist/item-checklist';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { AddItemPage } from '../pages/add-item/add-item';
import { LockScreenPage } from '../pages/lock-screen/lock-screen';
import { AboutmePage } from '../pages/aboutme/aboutme';

import {ContactsService} from './services/contacts.service';
import {FeedbackService} from './services/feedback.service';
import {NoteService} from './services/note.service';
import {ItemService} from './services/item.service';

import { StatusBar } from '@ionic-native/status-bar';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';

@NgModule({
  declarations: [
    MyApp,
    SearchContactsPage,
    ContactslistPage,
    ContactDetailsPage,
    AddContacsPage,
    FeedbackPage,
    FeedbackDetailsPage,
    AddFeedbackPage,
    NotePage,
    AddNotePage,
    AboutmePage,
    NoteDetailsPage,
    ItemChecklistPage,
    ItemDetailsPage,
    AddItemPage,
    HomePage,
    LockScreenPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchContactsPage,
    ContactslistPage,
    ContactDetailsPage,
    AddContacsPage,
    FeedbackPage,
    FeedbackDetailsPage,
    AddFeedbackPage,
    NotePage,
    AddNotePage,
    AboutmePage,
    NoteDetailsPage,
    ItemChecklistPage,
    ItemDetailsPage,
    AddItemPage,
    HomePage,
    LockScreenPage
  ],
  providers: [
    StatusBar,
    ContactsService,
    FeedbackService,
    FingerprintAIO,
    NoteService,
    File,
    ItemService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
