import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PriorityPipe } from './priority.pipe';

@Component({
  selector: 'digi-root',
  standalone: true,
  imports: [CommonModule, TodoListComponent, PriorityPipe],
  template: '<digi-todo-list></digi-todo-list>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}

