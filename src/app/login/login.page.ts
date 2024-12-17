import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
  private router: Router, 
  public navCtrl: NavController, 
  private loadingCtrl: LoadingController,
  ){}

  ngOnInit() {
  }

  navigate(){
    this.router.navigate(['/tabs/tab1']);
  }

}
