import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { user } from '../home/user';

/**
 * Generated class for the Demo2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo2',
  templateUrl: 'demo2.html',
})
export class Demo2Page {
x:user;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  name:String="";
  mail:string="";
  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo2Page');
    this.x=this.navParams.get('x');
    this.name=this.x.Name;

  }

}
