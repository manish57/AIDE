import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { LockScreenPage } from '../pages/lock-screen/lock-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LockScreenPage;

  constructor(platform: Platform, statusBar: StatusBar) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      //splashScreen.hide();
    });
  }
}
