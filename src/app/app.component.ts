import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{ title }}, your personal custom made To-Do List!
    </h1>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ManageMe';
}
