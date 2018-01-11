import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  name: string;
  surname: string;

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
    public events: Events,) {

      events.subscribe('component1Name:changed', name => {
          this.name = name;
      })

      events.subscribe('component2Surname:changed', surname => {
        this.surname = surname;
      })

  }

}
