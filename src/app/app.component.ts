import { Component } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{ title }}, your personal custom made To-Do List!
    </h1>

    <app-input-button-unit></app-input-button-unit>

    <ul>
      <li *ngFor="let todoItem of todoList">
        <app-todo-item [item]></app-todo-item>
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  // mock data
  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];
}
