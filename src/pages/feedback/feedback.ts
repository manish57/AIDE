import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { File } from '@ionic-native/file';
import {FeedbackService} from '../../app/services/feedback.service';
import {FeedbackDetailsPage} from '../feedback-details/feedback-details';
import {AddFeedbackPage} from '../add-feedback/add-feedback';
import {HomePage} from '../home/home';
import * as papa from 'papaparse';


@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {

  feedbacks: any;
  constructor(public navCtrl: NavController, private file: File, public platform: Platform, public navParams: NavParams, private feedbackService: FeedbackService) {
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
  
  ngOnInit() {
    this.feedbackService.getFeedbacks().subscribe(feedbacks => {
      this.feedbacks = feedbacks;
    })
  }
  
  ionViewWillEnter(){
    this.feedbackService.getFeedbacks().subscribe(feedbacks => {
      this.feedbacks = feedbacks;
    })        
  }

  feedbackSelected(event, feedback){
    this.navCtrl.push(FeedbackDetailsPage, {
      feedback: feedback
    });
  }

  addFeedback(){
    this.navCtrl.push(AddFeedbackPage);
  }

  downloadCSV() {
    let csv = papa.unparse({
      fields: ["name","rating","feedback"],
      data: this.feedbacks
    });
   
    /*// Dummy implementation for Desktop download purpose
    var blob = new Blob([csv]);
    var a = window.document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = "feedbacks.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);*/
  
    var blob = new Blob([csv]);
    let fileName = "feedbacks.csv"
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

