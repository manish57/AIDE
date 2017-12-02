import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddContacsPage } from './add-contacs';

@NgModule({
  declarations: [
    AddContacsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddContacsPage),
  ],
})
export class AddContacsPageModule {}
