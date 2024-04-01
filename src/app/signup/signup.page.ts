import { Component, OnInit } from '@angular/core';
import { FireService } from '../fire.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
              public fireService : FireService,
              
              ) { }

  ngOnInit() {
    this.fireService.callGetRedirectResult();
  }

  signUpWithGoogle(){
    this.fireService.signInWithGoogle();
  }

}
