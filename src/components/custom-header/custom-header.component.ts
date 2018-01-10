import { AlertController, App } from 'ionic-angular';
import { Component } from '@angular/core';

import { AuthService } from './../../providers/auth/auth.service';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'custom-header',
  templateUrl: 'custom-header.component.html'
})
export class CustomHeaderComponent extends BaseComponent {

  text: string;

  constructor(
    public alertCtrl: AlertController,
    public authService: AuthService,
    public app: App
  ) {
    super(alertCtrl, authService, app);
  }

}
