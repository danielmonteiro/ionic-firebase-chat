import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { ChatPage } from './../pages/chat/chat';
import { CustomHeaderComponent } from './../components/custom-header/custom-header.component';
import { HomePage } from '../pages/home/home';
import { MyApp } from './app.component';
import { SigninPage } from './../pages/signin/signin';
import { SignupPage } from './../pages/signup/signup';

import { UserService } from './../providers/user/user.service';
import { AuthService } from './../providers/auth/auth.service';

const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyAXn9GK4wQyUIXOF_w2nRQudUEPf5S5Fss",
  authDomain: "ionic2-firebase-chat-d9fa6.firebaseapp.com",
  databaseURL: "https://ionic2-firebase-chat-d9fa6.firebaseio.com",
  projectId: "ionic2-firebase-chat-d9fa6",
  storageBucket: "ionic2-firebase-chat-d9fa6.appspot.com",
  messagingSenderId: "153481057998"
};

@NgModule({
  declarations: [
    ChatPage,
    CustomHeaderComponent,
    HomePage,
    MyApp,
    SigninPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ChatPage,
    HomePage,
    MyApp,
    SigninPage,
    SignupPage
  ],
  providers: [
    AuthService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService
  ]
})
export class AppModule {}
