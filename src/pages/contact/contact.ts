import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  no1:number=0;
  no2:number=0;
  flag:number=0;
  num:string="";
  press1()
  {
    this.num+="1";
  }
  press2()
  {
    this.num+="2";
  }
  press3()
  {
    this.num+="3";
  }
  press4()
  {
    this.num+="4";
  }
  press5()
  {
    this.num+="5";
  }
  press6()
  {
    this.num+="6";
  }
  press7()
  {
    this.num+="7";
  }
  press8()
  {
    this.num+="8";
  }
  press9()
  {
    this.num+="9";
  }
  press0()
  {
    this.num+="0";
  }
   pressdot()
  {
    this.num+=".";
  }
  pressperc()
  {
     this.no2=+this.num;
  this.num="";
    this.num=((this.no1*this.no2)/100)+"";
  }
 pressplus()
 {
   this.no1=+this.num;
   this.num="";
   this.flag=1;
}
pressmul()
 {
   this.no1=+this.num;
   this.num="";
   this.flag=2;
}
pressdiv()
 {
   this.no1=+this.num;
   this.num="";
   this.flag=3;
}
pressbackspace()
{
  this.num=this.num.substring(0,this.num.length-1);

}
pressmin()
 {
   this.no1=+this.num;
   this.num="";
   this.flag=4;
}

pressc()
{
  this.num="";
}

presseq()
{
  this.no2=+this.num;
  this.num="";
  if(this.flag==1)
  {
    this.num=this.no1+this.no2+"";

  }
  if(this.flag==2)
  {
    this.num=this.no1*this.no2+"";

  }
  if(this.flag==3)
  {
    this.num=this.no1/this.no2+"";

  }
  if(this.flag==4)
  {
    this.num=this.no1-this.no2+"";

  }
}
}
