import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';

import { map } from 'rxjs/operators';
import { User } from '../models/User.model';
import * as productActions from '../ngrx/actions/products.actions';
import * as authActions from '../ngrx/actions/user.actions';
import * as cartActions from '../ngrx/actions/carts.actions';
import { AppState } from '../ngrx/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLoggedIn: boolean;

  constructor(private angularFireAuth: AngularFireAuth, private firestore: AngularFirestore, private store: Store<AppState>) {
    this.userLoggedIn = false;
    this.angularFireAuth.onAuthStateChanged((user) => {
      this.userLoggedIn = !!user
    });
  }

  initAuthListener() {
    this.angularFireAuth.authState.subscribe(firebaseUser => {
      const userModel = new User(firebaseUser?.uid || '', firebaseUser?.email || '');
      console.info('userModel', userModel);
      if (firebaseUser) {
        this.store.dispatch(authActions.setUserLogin({ user: userModel }));
      } else {
        this.store.dispatch(cartActions.destroyCars());
        this.store.dispatch(authActions.unsetUserLogin());
        this.store.dispatch(productActions.destroyProducts());
      }
    });
  }

  async login(email: string, password: string) {
    return await this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  async register(email: string, password: string) {
    return await this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      .then(firebaseUser => {
        const user = new User(firebaseUser.user?.uid || '', firebaseUser.user?.email || '');
        this.firestore.doc(`${user.uid}/usuario`).set({ ...user }).then((x) => {
          console.info(x);
        });
      });
  }

  async logout() {
    return await this.angularFireAuth.signOut().then(() => {
      
    });
  }

  isAuth() {
    return this.angularFireAuth.authState.pipe(
      map(firebaseUser => !!firebaseUser)
    )
  }
}
