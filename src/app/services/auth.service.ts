import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLoggedIn: boolean;

  constructor(private angularFireAuth: AngularFireAuth) {
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
    return await this.angularFireAuth.createUserWithEmailAndPassword(email, password);
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
