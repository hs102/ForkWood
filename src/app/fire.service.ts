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
}
