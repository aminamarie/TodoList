import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { TodoService, Todo } from '../todo.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoAddComponent } from '../todo-add/todo-add.component';

@Component({
  selector: 'digi-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, TodoAddComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos$: Observable<Todo[]>;

  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.getTodos();
  }

  onToggleTodoCompletion(id: number) {
    this.todoService.toggleTodoCompletion(id);
  }

  onRemoveTodo(id: number) {
    this.todoService.removeTodo(id);
  }
}
