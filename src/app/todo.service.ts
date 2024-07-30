import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high'; // Ajout de la propriété de priorité
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private todosSubject = new BehaviorSubject<Todo[]>(this.todos);

  constructor() {}

  getTodos() {
    return this.todosSubject.asObservable();
  }

  addTodo(title: string, priority: 'low' | 'medium' | 'high') {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
      priority // Définir la priorité lors de l'ajout d'une tâche
    };
    this.todos = [...this.todos, newTodo];
    this.todosSubject.next(this.todos);
  }




  toggleTodoCompletion(id: number) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.todosSubject.next(this.todos);
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.todosSubject.next(this.todos);
  }
}
