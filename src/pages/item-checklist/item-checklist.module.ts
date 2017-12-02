import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemChecklistPage } from './item-checklist';

@NgModule({
  declarations: [
    ItemChecklistPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemChecklistPage),
  ],
})
export class ItemChecklistPageModule {}
