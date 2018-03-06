import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {task} from '../about/task';
/**
 * Generated class for the Demo3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo3',
  templateUrl: 'demo3.html',
})
export class Demo3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 name:String="";
 id:number;
 x:task;
  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo3Page');
this.x=this.navParams.get('x');
    this.name=this.x.name;
    this.id=this.x.id;

  }

}
