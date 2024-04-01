import { Component, OnInit } from '@angular/core';
import { FireService } from '../fire.service';
import { getAdditionalUserInfo, getAuth, getRedirectResult } from '@angular/fire/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public fireService : FireService) { }

  ngOnInit() {
  }

  signInWithGoogle(){
    this.fireService.signInWithGoogle();
  }

}
