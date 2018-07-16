import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  public flIstoggle: boolean;
	
  constructor(public navCtrl: NavController, private flashlight:Flashlight) {
    this.flIstoggle = false;
  }
  
  public ChangeFlashlightStatus(){
	  
    console.log("Toggled :" + this.flIstoggle);
    
      if(this.flIstoggle){

        this.flashlight.switchOn();
      }else{

        this.flashlight.switchOff();

      }

  }

}
