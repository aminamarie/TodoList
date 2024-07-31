import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  priority?: string; // Ajout de la propriété de priorité
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiURL = 'http://localhost:3000/tasks'; // URL de l'API

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiURL);
  }

  addTodo(title: string, priority: string): Observable<void> {
    return this.http.post<void>(this.apiURL, { title, priority });
  }

  removeTodo(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }

  toggleTodoCompletion(id: string): Observable<Todo> {
    return this.http.patch<Todo>(`${this.apiURL}/${id}`, { completed: true });
  }

  getTodoById(id: string): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiURL}/${id}`).pipe(
      catchError(error => {
        console.error(`Todo with ID ${id} not found`, error);
        return throwError(() => new Error('Not Found'));
      })
    );
  }
}