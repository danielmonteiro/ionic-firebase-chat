import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import * as firebase from 'firebase/app';

import { User } from './../../models/user.model';
import { BaseService } from '../base.service';

@Injectable()
export class UserService extends BaseService{

  users: FirebaseListObservable<User[]>;

  constructor(
    public af: AngularFireDatabase,
    public http: Http
  ) {
    super();
    this.users = this.af.list(`/users`);
  }

  create(user: User, uid: string): firebase.Promise<void> {
    
    return this.af.object(`/users/${uid}`)
    .set(user)
    .catch(this.handlePromiseError);
  }
  
  userExists(username: String): Observable<boolean> {
    
    return this.af.list(`/users`, {
      query: {
        orderByChild: 'username',
        equalTo: username
      }
    }).map((users: User[]) => {
      return users.length > 0;
    }).catch(this.handleObservableError);
  }

}
