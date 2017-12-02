import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NoteService } from '../../app/services/note.service';
import { NotePage } from '../note/note';

/**
 * Generated class for the NoteDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-note-details',
  templateUrl: 'note-details.html',
})
export class NoteDetailsPage {

  public note: any;
  public result: any;
  public editState: boolean = false;
  public noteToEdit: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private noteService: NoteService) {
    this.note = navParams.get('note');
  }

  deleteNote(noteId){
    this.editState = false;
    this.noteToEdit = null;
    this.noteService.deleteNote(noteId).subscribe(data => {
      this.result = data;
    });
    this.navCtrl.push(NotePage);    
  }

  editNote($event, note) {
    this.editState = true;
    this.noteToEdit = note;
  }

  updateNote() {
    this.noteService.updateNote(this.noteToEdit).subscribe(data => {
      this.result = data;
    });
    this.editState = false;
    this.noteToEdit = null;
    this.navCtrl.push(NotePage);
  }

}

