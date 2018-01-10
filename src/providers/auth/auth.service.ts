import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';

import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import { BaseService } from '../base.service';

@Injectable()
export class AuthService extends BaseService {

  constructor(
    public afAuth: AngularFireAuth,
    public http: Http
    ) {

    super();
    console.log("auth.service constructor()");
  }
  
  createAuthUser(user: { email: string, password: string }): firebase.Promise<firebase.User>{
    console.log("auth.service createAuthUser()");
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
    .catch(this.handlePromiseError);
  }
  
  signWithEmail(user: { email: string, password: string }): firebase.Promise<boolean>{
    console.log("auth.service signWithEmail()");
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then((authUser: firebase.User) => {
        return authUser != null;
      }).catch(this.handlePromiseError);
  }

  logout(): firebase.Promise<any> {
    return this.afAuth.auth.signOut();
  }

  get authenticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.afAuth.authState
        .first()
        .subscribe((authUser: firebase.User) => {
          (authUser) ? resolve(true) : reject(false);
        })
    });
  }

}
