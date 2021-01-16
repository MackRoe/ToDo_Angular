import { Component } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{ title }}, your personal custom made To-Do List!
    </h1>

    <app-list-manager></app-list-manager>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ManageMe';

}
