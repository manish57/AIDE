import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import {NoteService} from '../../app/services/note.service';
import {NotePage} from '../note/note';
import {HomePage} from '../home/home';

/**
 * Generated class for the AddNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {
  public title: string;
  public note: string;
  public result: any;
  public myDate: string;

  constructor(public navCtrl: NavController, public platform: Platform, public navParams: NavParams, public noteService: NoteService) {
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


  save() {
    var note = {
      title: this.title,
      note: this.note,
      myDate: this.myDate
    }

    this.noteService.addNote(note).subscribe(data => {
      this.result = data;
    });

    this.navCtrl.push(NotePage);
  }

}

