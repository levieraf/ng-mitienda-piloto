import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private angularFireAuth: AngularFireAuth) { }

  async login(email: string, password: string) {
    return await this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  async register(email: string, password: string) {
    return await this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }
}
