import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { provideAuth, getAuth } from '@angular/fire/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3ek2lFK9JwTtru3pUZk7JfMEQAjPiMYs",
  authDomain: "worood-db.firebaseapp.com",
  projectId: "worood-db",
  storageBucket: "worood-db.appspot.com",
  messagingSenderId: "441607635986",
  appId: "1:441607635986:web:8b909578eea0579de6c4cb"
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule , 
  // initialize angularfire with credentials from the dashboard
  provideFirebaseApp(() => initializeApp(firebaseConfig)),
  // Import the AngularFireDatabaseModule to use database
  provideFirestore(() => getFirestore()),

  provideAuth(() => getAuth())
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
