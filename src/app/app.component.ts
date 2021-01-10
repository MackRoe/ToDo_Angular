import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{ title }}, your personal custom made To-Do List!
    </h1>

    <app-input-button-unit></app-input-button-unit>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ManageMe';
}
