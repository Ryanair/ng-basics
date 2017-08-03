import { Component, OnInit } from '@angular/core';
import { Todo } from '../model';
import { TodosService } from '../todo.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: ['.todo-btn { margin-left: 10px; }']
})
export class TodosListComponent implements OnInit {
  public todos: Todo[];

  constructor(private todoService: TodosService) {}

  public ngOnInit(): void {
    this.todos = this.todoService.list();
  }

  public onClick(todo: Todo): void {
    this.todoService.changeTodoStatus(todo);
  }
}
