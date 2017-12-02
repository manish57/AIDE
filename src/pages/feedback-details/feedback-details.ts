import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { FeedbackService } from '../../app/services/feedback.service';
import { FeedbackPage } from '../feedback/feedback';

/**
 * Generated class for the FeedbackDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback-details',
  templateUrl: 'feedback-details.html',
})
export class FeedbackDetailsPage {

  public feedback: any;
  public result: any;
  public editState: boolean = false;
  public feedbackToEdit: any;

  constructor(public navCtrl: NavController, public platform: Platform, public navParams: NavParams, private feedbackService: FeedbackService) {
    this.feedback = navParams.get('feedback');
    platform.ready().then(()=>{
      platform.registerBackButtonAction(()=>this.myHandlerFunction());
    })
  }

  myHandlerFunction(){
    console.log("Done");
  }

  deleteFeedback(feedbackId){
    this.editState = false;
    this.feedbackToEdit = null;
    this.feedbackService.deleteFeedback(feedbackId).subscribe(data => {
      this.result = data;
    });
    this.navCtrl.push(FeedbackPage);    
  }

  editFeedback($event, feedback) {
    this.editState = true;
    this.feedbackToEdit = feedback;
  }

  updateFeedback() {
    this.feedbackService.updateFeedback(this.feedbackToEdit).subscribe(data => {
      this.result = data;
    });
    this.editState = false;
    this.feedbackToEdit = null;
    this.navCtrl.push(FeedbackPage);
  }

}
