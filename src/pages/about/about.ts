import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{  task }from './task';
import {Demo3Page} from '../demo3/demo3';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
 arr:task[]=[

    new task(1,"shivani","manager",50000),
  


 ];
  constructor(public navCtrl: NavController) {

  }
  id:number;
  name:string="";
  desi:String="";
  salary:number;
  x:string="";
  shivani()
  {
    alert(this.x);
  }
  onDelete(x)
  {

    this.arr.splice(this.arr.indexOf(x),1);

  }
  addTask()
  {
    this.arr.push(new task(this.id,this.name,this.desi,this.salary));
  
  }
   onselect(item)
 {
   this.navCtrl.push(Demo3Page,{x:item});

 }

}