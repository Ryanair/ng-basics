# Angular - Exercise 3 - Exercices
The purpose of this exercise is to get familiar with Angular Services.
The final goal is to create a todo-list application.

## Before ...
The existing app is created using Angular-Cli. Familiarise yourself with the structure of the  code.

The app runs like that
```bash
$ ng serve
```

App is served in [http://localhost:4200](http://localhost:4200).

We have created 2 components for you:

1. TodosListsComponent
2. TodoItemComponent

## Let's start
Create a service providing the following:

1. a listof todos: you need to provide list from https://jsonplaceholder.typicode.com/todos
2. a reset/done action for changing the status of a todo item.

Note: we need to decrease use of 'internal' state inside components as much as possible i.e
the list needs to be provided by a service, and also changing the status of a todo-item
should not be handled by the component displaying the todo-item.

Name your service TodosService (Best practice: prefer using 'Service' as suffix)

**Good Luck!**
