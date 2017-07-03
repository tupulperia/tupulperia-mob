import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

    ionViewWillEnter() { // THERE IT IS!!!
	console.log('ionViewWillEnter');
	window.open('http://www.tupulperia.com', '_system');	
    }

}
