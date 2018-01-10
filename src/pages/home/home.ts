import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2/database';

import { AuthService } from './../../providers/auth/auth.service';
import { ChatPage } from './../chat/chat';
import { SigninPage } from './../signin/signin';
import { SignupPage } from './../signup/signup';
import { User } from './../../models/user.model';
import { UserService } from './../../providers/user/user.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: FirebaseListObservable<User[]>;
  view: string = "chats";

  constructor(
    public authService: AuthService,
    public navCtrl: NavController,
    public userService: UserService
  ) {
  }

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }
  
  ionViewDidLoad(){
    this.users = this.userService.users;
    console.log(this.users);
  }

  onSignup(): void{
    this.navCtrl.push(SignupPage)
  }

  onChatCreate(user){
    this.navCtrl.push(ChatPage, {'user': user})
  }

  onLogout(): void {
    this.authService.logout();
    console.log("Logout");
    this.navCtrl.setRoot(SigninPage);
  }

}
