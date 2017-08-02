import { Component, OnInit } from '@angular/core';
import { Todo } from '../model';

const mockTodos: Todo[] = [
  {id: '1', title: 'Wake up', completed: true},
  {id: '2', title: 'Have breakfast', completed: false},
  {id: '3', title: 'Brush teeth', completed: false}
];

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html'
})
export class TodosListComponent implements OnInit {
  public todos: Todo[];

  public ngOnInit(): void {
    this.todos = [].concat(mockTodos);
  }
}
