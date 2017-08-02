# Angular - Exercise 2 - Components
The purpose of this exercise is to get familiar with Angular Components.
The final goal is to create a todo-list application.

## Before ...
The existing app is created using Angular-Cli. Familiarise yourself with the structure of the  code.

The app runs like that
```bash
$ ng serve
```

App is served at [http://localhost:4200](http://localhost:4200).

## Let's start
You need to create 2 components.
[Angular Component](https://angular.io/api/core/Component)

### 1st Component
Create a component and name it `TodoItemComponent` (best practice: use 'Component' suffix).
Name the selector `'todo-item'`.

Template and styling should be included in separate files (Decorator metadata: templateUrl, styleUrls).

This component should display a simple todo item with the following specs:

```typescript
interface Note {
  id: string;
  title: string;
  completed: boolean;
}
```

Hint: Prefer providing models from a seperate file i.e model.ts.
[Typescript Modules](https://www.typescriptlang.org/docs/handbook/modules.html)

### 2nd Component
Create a component and name it `TodosListComponent`. Name the selector `'todos-list'`.
This component should reuse and display a simple list of todo-items.
For now, use a static list like the one below:

```json
[
  {
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  }
]
```

Note: Styling is not necessary, but feel free to do it if you like.

**Good Luck!**
