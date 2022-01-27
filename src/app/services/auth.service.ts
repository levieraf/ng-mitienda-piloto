import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

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

  async login(email: string, password: string) {
    return await this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  async register(email: string, password: string) {
    return await this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  logout(): void {
    this.userLoggedIn = false;
    this.angularFireAuth.signOut();
  }

  isUserLoggedIn(): boolean {
    return this.userLoggedIn
  }
}
