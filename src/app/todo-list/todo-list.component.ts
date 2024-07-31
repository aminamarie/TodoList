import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { TodoService, Todo } from '../todo.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoAddComponent } from '../todo-add/todo-add.component';
import { Router } from '@angular/router';

@Component({
  selector: 'digi-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, TodoAddComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos$: Observable<Todo[]>;
  newTodo: string = '';
  newTodoPriority: string = '';

  constructor(private todoService: TodoService, private router: Router) {
    this.todos$ = this.todoService.getTodos();
  }

  ngOnInit():void{
    this.todos$ = this.todoService.getTodos(); // abonnement aux tache depuis l'api
  }


  addTask({ title, priority }: { title: string, priority: string }): void {
    console.log('Adding task:', title, 'with priority:', priority);
    this.todoService.addTodo(title, priority).subscribe(() => {
      this.todos$ = this.todoService.getTodos(); // Met à jour la liste des tâches
    });
  }


  onToggleTodoCompletion(id: string): void {
    this.todoService.toggleTodoCompletion(id).subscribe(() => {
      this.todos$ = this.todoService.getTodos(); // Met à jour la liste des tâches
    });
  }

  onRemoveTodo(id: string): void {
    this.todoService.removeTodo(id).subscribe(() => {
      this.todos$ = this.todoService.getTodos(); // Met à jour la liste des tâches
    });
    this.router.navigate(['/delete', id]);  
  }

  viewTodoDetails(todo: Todo) {
    console.log(`Navigating to /detail/${todo.id}`);
    this.router.navigate(['/view', todo.id]);  
  }  
}
