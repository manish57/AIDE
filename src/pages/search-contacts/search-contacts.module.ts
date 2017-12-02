import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchContactsPage } from './search-contacts';

@NgModule({
  declarations: [
    SearchContactsPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchContactsPage),
  ],
})
export class SearchContactsPageModule {}
