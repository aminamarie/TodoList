import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  priority?: string; // Ajout de la propriété de priorité
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiURL = 'http://localhost:3000/tasks' //url de l'api

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.apiURL)
  }

  addTodo(title:string, priority:string):Observable<void>{
      return this.http.post<void>(this.apiURL, {title, priority})
    }

  removeTodo(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiURL}/${id}`);
  }

  toggleTodoCompletion(id: number) {
    return this.http.patch<Todo>(`${this.apiURL}/${id}`, { completed: true });
  }
}


