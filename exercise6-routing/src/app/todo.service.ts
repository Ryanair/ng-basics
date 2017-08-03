import { Injectable } from '@angular/core';
import { Todo } from './model';

const mockTodos: Todo[] = [
  {id: '1', title: 'Wake up', completed: true},
  {id: '2', title: 'Have breakfast', completed: false},
  {id: '3', title: 'Brush teeth', completed: false}
];

@Injectable()
export class TodosService {
  public list(): Todo[] {
    return mockTodos;
  }

  public changeTodoStatus(todo: Todo): void {
    todo.completed = !todo.completed;
  }
}