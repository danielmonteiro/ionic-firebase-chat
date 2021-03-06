import { NavController, App, AlertController } from 'ionic-angular';
import { OnInit } from '@angular/core';

import { AuthService } from './../providers/auth/auth.service';
import { SigninPage } from './../pages/signin/signin';

export abstract class BaseComponent implements OnInit {
  
  protected navCtrl: NavController;

  constructor(
    public alertCtrl: AlertController,
    public authService: AuthService,
    public app: App
  ) {
  }

  ngOnInit(): void {
    this.navCtrl = this.app.getActiveNav();
  }

  onLogout(): void {

    console.log("onLogout");
    

    this.alertCtrl.create({
      message: 'Do you really want to exit?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.authService.logout()
              .then(() => {
                this.navCtrl.setRoot(SigninPage);
              })
          }
        },
        {
          text: 'No'
        }
      ]
    }).present();
  }

}
