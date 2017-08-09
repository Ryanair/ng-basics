import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodosListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
