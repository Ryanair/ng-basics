# Angular - Exercise 5 - Pipes
The purpose of this exercise is to get familiar with Angular Pipes.
The final goal is to filter completed todos via custom pipe.

## Before ...
The existing app is created using Angular-Cli. Familiarise yourself with the project structure.

The app runs like that
```bash
$ ng serve
```

App is served at [http://localhost:4200](http://localhost:4200).

## Let's start
Create a `completed-todos` directory under `app`. That's where you will build your custom pipe.

### Completed todos pipe
Create a `CompletedTodos` pipe that takes in an array of todos and returns only the completed ones.

Remember to suffix the class name with 'Pipe'.

### Completed todos pipe with param
Parametrise `completedTodos` pipe with a _boolean_ so that either completed or not completed todos can be returned.

Experiment with `pure: 'false'` inside the pipe's metadata.
[Angular Router](https://angular.io/guide/pipes#pure-and-impure-pipes)

**Good Luck!**
