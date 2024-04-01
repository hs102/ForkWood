
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
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential ? credential.accessToken : null;
          // The signed-in user info.
          this.loggedInUser = result.user;
          console.log("user: " + JSON.stringify(this.loggedInUser));
          // IdP data available using getAdditionalUserInfo(result)
          this.loggedInUserIdpData = getAdditionalUserInfo(result);
          console.log("Idp data: " + JSON.stringify(this.loggedInUserIdpData));
          // ...

          // then we would add the user information to the database using firestore
          // this.navController.navigateForward('/tabs/tab1');
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
          // redirect show an error message
        });

      
      // const auth = getAuth();
      // await signInWithRedirect(auth, provider);
      // getRedirectResult(auth)
      //   .then((result) => {
      //     // This gives you a Google Access Token. You can use it to access Google APIs.
      //     const credential = result ? GoogleAuthProvider.credentialFromResult(result) : null;
      //     const token = credential ? credential.accessToken : null;

      //     // The signed-in user info.
      //     const user = result ? result.user : null;
      //     // IdP data available using getAdditionalUserInfo(result)
      //     // ...
      //   }).catch((error) => {
      //     // Handle Errors here.
      //     const errorCode = error.code;
      //     const errorMessage = error.message;
      //     // The email of the user's account used.
      //     const email = error.customData.email;
      //     // The AuthCredential type that was used.
      //     const credential = GoogleAuthProvider.credentialFromError(error);
      //     // ...
      //   });
      // // this.navController.navigateForward('/tabs/tab1');
      
   }
}
