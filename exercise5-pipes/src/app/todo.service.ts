import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './model';

@Injectable()
export class TodosService {
  constructor(private http: HttpClient) {}

  public list$(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  public changeTodoStatus(todo: Todo): void {
    todo.completed = !todo.completed;
  }
}
