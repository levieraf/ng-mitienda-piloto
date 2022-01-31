import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { map } from 'rxjs/operators';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLoggedIn: boolean;

  constructor(private angularFireAuth: AngularFireAuth, private firestore: AngularFirestore) {
    this.userLoggedIn = false;
    this.angularFireAuth.onAuthStateChanged((user) => {
      this.userLoggedIn = !!user
    });
  }


  initAuthListener() {
    this.angularFireAuth.authState.subscribe(firebaseUser => {
      console.info(firebaseUser);
    });
  }

  async login(email: string, password: string) {
    return await this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  async register(email: string, password: string) {
    return await this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      .then(firebaseUser => {
        const user = new User(firebaseUser.user?.uid || '', firebaseUser.user?.email || '');
        this.firestore.doc(`${user.uid}/usuario`).set({...user}).then((x) => {
          console.info(x);
        });
      });
  }

  async logout() {
    return await this.angularFireAuth.signOut();
  }

  isAuth() {
    return this.angularFireAuth.authState.pipe(
      map(firebaseUser => !!firebaseUser)
    )
  }
}
