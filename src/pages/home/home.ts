import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { user }from './user'
import { Demo2Page } from '../demo2/demo2';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
 Id:String="";
 Name:String="";
 Bdate:String="";
 Gender:String="";
 Address:String="";
 x:string="";
 arr:user[]=[

    new user("1dfvffg","shivani","14/7/98","female","abad")



 ];
  constructor(public navCtrl: NavController) {

  }
 userinsert()
 {
   this.arr.push(new user(this.Id,this.Name,this.Bdate,this.Gender,this.Address));
  
 }
 onDelete(x)
 {
   this.arr.splice(this.arr.indexOf(x),1);
 }
 onselect(item)
 {
   this.navCtrl.push(Demo2Page,{x:item});

 }
 

}
