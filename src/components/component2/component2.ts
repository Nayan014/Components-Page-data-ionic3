import { Component, Input } from '@angular/core';

import { Events } from 'ionic-angular'

@Component({
  selector: 'component2',
  templateUrl: 'component2.html'
})
export class Component2Component {
  
  data : string;
  surname: string;
  com1Name: string;

  @Input()
  set title(newData: string) {
      this.data = newData;
  }
  get title() {
      return this.data;
  }

  constructor(
    public events: Events,
  ) {
    events.subscribe('component1Name:changed', name => {
      this.com1Name = name;
    })
  }

  submit(){
    // Using Event to share component 1 data to Home page.
    this.events.publish('component2Surname:changed', this.surname);
  }
}
