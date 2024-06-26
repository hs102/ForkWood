
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
    sendSignInLinkToEmail,
    onAuthStateChanged,
    signInWithPopup,
    getRedirectResult,
    signInWithRedirect,
    GoogleAuthProvider,
    getAdditionalUserInfo,
  } from '@angular/fire/auth';

  import { NavController } from '@ionic/angular';

  const provider = new GoogleAuthProvider();

  
  @Injectable({
    providedIn: 'root'
  })
  export class FireService {
    loggedInUser: any;
    loggedInUserIdpData: any;

    constructor(public firestore : Firestore,
              public auth : Auth,
              public navController : NavController,

              ) {
                
              }

    async signInWithGoogle(){
      console.log("signing in with google");
      const auth = getAuth();
      await signInWithRedirect(auth, provider);
      
      //  the sign in with pop up method
            // const auth = getAuth();
      // signInWithPopup(auth, provider)
      //   .then((result) => {
      //     // This gives you a Google Access Token. You can use it to access the Google API.
      //     const credential = GoogleAuthProvider.credentialFromResult(result);
      //     const token = credential ? credential.accessToken : null;
      //     // The signed-in user info.
      //     this.loggedInUser = result.user;
      //     console.log("user: " + JSON.stringify(this.loggedInUser));
      //     // IdP data available using getAdditionalUserInfo(result)
      //     this.loggedInUserIdpData = getAdditionalUserInfo(result);
      //     console.log("Idp data: " + JSON.stringify(this.loggedInUserIdpData));
      //     // ...

      //     // then we would add the user information to the database using firestore
      //     // this.navController.navigateForward('/tabs/tab1');
      //   }).catch((error) => {
      //     // Handle Errors here.
      //     const errorCode = error.code;
      //     const errorMessage = error.message;
      //     // The email of the user's account used.
      //     const email = error.customData.email;
      //     // The AuthCredential type that was used.
      //     const credential = GoogleAuthProvider.credentialFromError(error);
          // console.log("error code: " + errorCode);
          // console.log("error message: " + errorMessage);
          // console.log("email: " + email);
          // console.log("credential: " + credential);
      //     // ...
      //     // redirect show an error message
      //   });

    }

   callGetRedirectResult(){
    const auth = getAuth();
    getRedirectResult(auth)
        .then((result) => {
          if(result){

            
            //  should show loading indicator here
            // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = result ? GoogleAuthProvider.credentialFromResult(result) : null;
            const token = credential ? credential.accessToken : null;
            
            // The signed-in user info.
            this.loggedInUser = result ? result.user : null;
            // IdP data available using getAdditionalUserInfo(result)
            this.loggedInUserIdpData = result ? getAdditionalUserInfo(result) : null;
            
            console.log("user: " + JSON.stringify(this.loggedInUser));
            console.log("Idp data: " + JSON.stringify(this.loggedInUserIdpData));
            // ...
            //  should show loading indicator here, and make it off when navigation is done
            this.navController.navigateForward('/tabs/tab1'); 
          }
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.log("error code: " + errorCode);
          console.log("error message: " + errorMessage);
          console.log("email: " + email);
          console.log("credential: " + credential);
          // ...
        });
   }

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

              



