import { Routes } from '@angular/router';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoListComponent } from './todo-list/todo-list.component';

export const routes: Routes = [
    { path: 'view/:id', component: TodoDetailComponent },
    { path: 'delete/:id', component: TodoListComponent },
    { path: '', component: TodoListComponent }
];
