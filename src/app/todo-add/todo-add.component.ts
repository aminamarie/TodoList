import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'digi-todo-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
  newTodo: string = '';
  newPriority: string = '';

  @Output() addTodo: EventEmitter<{ title: string, priority: string }> = new EventEmitter<{ title: string, priority: string }>();

  onAddTodo() {
    if (this.newTodo.trim() && this.newPriority.trim()) {
      console.log('Adding new todo:', this.newTodo, 'with priority:', this.newPriority);
      this.addTodo.emit({ title: this.newTodo, priority: this.newPriority });
      this.newTodo = ''; // Réinitialise le champ de saisie
      this.newPriority = ''; // Réinitialise le champ de priorité
    }
  }
}