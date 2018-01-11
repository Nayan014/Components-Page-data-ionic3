import { Component, Input } from '@angular/core';

import { Events } from 'ionic-angular'

@Component({
  selector: 'component1',
  templateUrl: 'component1.html'
})
export class Component1Component {

  data : string;
  name: string;
  com2Surname: string;

  @Input()
  set title(newData: string) {
      this.data = newData;
  }
  get title() {
      return this.data;
  }

  constructor(
    public events: Events,
  ){
    events.subscribe('component2Surname:changed', surname => {
      this.com2Surname = surname;
    })
  }

  submit(){
    // Using Event to share component 1 data to Home page.
    this.events.publish('component1Name:changed', this.name);
  }

}
