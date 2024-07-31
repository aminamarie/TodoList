//app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PriorityPipe } from './priority.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'digi-root',
  standalone: true,
  imports: [CommonModule, TodoListComponent, PriorityPipe, RouterModule],
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}

