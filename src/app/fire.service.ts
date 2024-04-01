import { Injectable } from '@angular/core';

import { Firestore } from '@angular/fire/firestore';
import { collection, collectionData, CollectionReference, DocumentReference } from '@angular/fire/firestore';
import { getDocs, doc, deleteDoc, updateDoc, docData, setDoc, addDoc, query } from '@angular/fire/firestore';
import { DocumentData } from 'firebase/firestore';
import { Observable } from 'rxjs';


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

  constructor(public firestore : Firestore,
              public auth : Auth,
              
              ) { }

 // Method to sign in with email and password
   async signInWithEmailPassword(email: string, password: string): Promise<void> {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      // Handle sign in error
      console.error('Error signing in:', error);
      throw error;
    }
  }

  // Method to create a new user with email and password
  async signUpWithEmailPassword(email: string, password: string): Promise<void> {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      // Handle sign up error
      console.error('Error signing up:', error);
      throw error;
    }
  }

  // Method to sign out the current user
  async signOut(): Promise<void> {
    try {
      await signOut(this.auth);
    } catch (error) {
      // Handle sign out error
      console.error('Error signing out:', error);
      throw error;
    }
  }

  // Method to send a sign-in link to the user's email
  async sendSignInLinkToEmail(email: string): Promise<void> {
    try {
      await sendSignInLinkToEmail(this.auth, email, {
        url: 'https://your-app-url.com', // URL where the user will be redirected after clicking the link
        handleCodeInApp: true // Whether to handle the sign-in code in the app
      });
    } catch (error) {
      // Handle send sign-in link error
      console.error('Error sending sign-in link:', error);
      throw error;
    }
  }
}

              



