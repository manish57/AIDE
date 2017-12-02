import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import {FeedbackService} from '../../app/services/feedback.service';
import {FeedbackPage} from '../feedback/feedback';
import {HomePage} from '../home/home';

/**
 * Generated class for the AddFeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-feedback',
  templateUrl: 'add-feedback.html',
})
export class AddFeedbackPage {
  public name: string;
  public feedback: string;
  public rating: string;
  public result: any;
  
  constructor(public navCtrl: NavController, public platform: Platform, public navParams: NavParams, public feedbackService: FeedbackService) {
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
    var feedback = {
      name: this.name,
      feedback: this.feedback,
      rating: this.rating
    }

    this.feedbackService.addFeedback(feedback).subscribe(data => {
      this.result = data;
    });

    this.navCtrl.push(FeedbackPage);
  }

}
