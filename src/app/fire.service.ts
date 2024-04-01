import { Injectable } from '@angular/core';

import {
    Auth,
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    sendSignInLinkToEmail
  } from '@angular/fire/auth';

  
@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(public auth : Auth) { }
}
