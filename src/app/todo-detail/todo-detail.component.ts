import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TodoService, Todo } from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class TodoDetailComponent implements OnInit {
  todo!: Todo;
  message: string = '';

  constructor(private route: ActivatedRoute, private todoService: TodoService) {
    console.log('TodoDetailComponent constructor called');
  }

  ngOnInit(): void {
    console.log('TodoDetailComponent ngOnInit called');
    const id= this.route.snapshot.paramMap.get('id');
    if (id === null) {
      this.message = 'Invalid ID: null';
      console.error('Invalid ID: null');
      return;
    }
    this.todoService.getTodoById(id).subscribe({
      next: (todo) => {
        this.todo = todo;
        this.message = `Vous regardez les détails de la tâche avec l'ID : ${id}`;
      },
      error: (error) => {
        this.message = `La tâche avec l'ID : ${id} n'a pas été trouvée.`;
      }
    });
  }
}
