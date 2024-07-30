import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService, Todo } from '../todo.service';
import { PriorityPipe } from '../priority.pipe';

@Component({
  selector: 'digi-todo-item',
  standalone: true,
  imports: [CommonModule, PriorityPipe],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() toggleCompletion = new EventEmitter<number>();
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();

  onToggleCompletion(toggleBtn: HTMLButtonElement) {
    this.toggleCompletion.emit(this.todo.id);
    toggleBtn.textContent = this.todo.completed ? 'Invalider' : 'Valider';
  }

  onRemove() {
    this.remove.emit(this.todo.id);
  }


}
