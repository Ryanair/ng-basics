import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() public todo: Todo;
  public btnMessage: string;

  public onClick(): void {
    this.todo.completed = !this.todo.completed;
    this.updateButtonMessage();
  }

  public ngOnInit(): void {
    this.updateButtonMessage();
  }

  private updateButtonMessage(): void {
    this.btnMessage = this.todo.completed ? 'Reset' : 'Done';
  }
}
