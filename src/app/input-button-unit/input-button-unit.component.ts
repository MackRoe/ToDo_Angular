import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is: {{ title }}
    </p>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title = "Add An Item";
  constructor() {
    console.log('In constructor')
    this.changeTitle('Something Entirely Different');
  }

  changeTitle(newTitle: string) {
    this.title = newTitle;
    console.log('Title changed to ' + this.title);
  }

  ngOnInit(): void {
    // this.title = 'Alternate Title';
    // It was necessary to comment out the previous line to get the changeTitle method to work.
  }
  // void is not included in the tutorial

}
