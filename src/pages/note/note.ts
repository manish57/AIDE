import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { File } from '@ionic-native/file';
import {NoteService} from '../../app/services/note.service';
import {NoteDetailsPage} from '../note-details/note-details';
import {AddNotePage} from '../add-note/add-note';
import {HomePage} from '../home/home';
import * as papa from 'papaparse';

@IonicPage()
@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})
export class NotePage {

  notes: any;
  constructor(public navCtrl: NavController, private file: File, public platform: Platform, public navParams: NavParams, private noteService: NoteService) {
    platform.ready().then(()=>{
      platform.registerBackButtonAction(()=>this.myHandlerFunction());
    })
  }
  
  myHandlerFunction(){
    console.log("Done");
  }

  ngOnInit() {
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes;
    })
  }
  
  ionViewWillEnter(){
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes;
    })        
  }

  noteSelected(event, note){
    this.navCtrl.push(NoteDetailsPage, {
      note: note
    });
  }

  addNote(){
    this.navCtrl.push(AddNotePage);
  }

  jumptoHome(){
    this.navCtrl.push(HomePage);
  }

  downloadCSV() {
    let csv = papa.unparse({
      fields: ["title", "myDate","note"],
      data: this.notes
    });
 
    /*// Dummy implementation for Desktop download purpose
    var blob = new Blob([csv]);
    var a = window.document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = "notes.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);*/
  
    var blob = new Blob([csv]);
    let fileName = "notes.csv"
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
