# Angular - Exercise 6 - Components
The purpose of this exercise is to get familiar with Angular Router.
The final goal is to enable navigation between a couple of views.

## Before ...
The existing app is created using Angular-Cli. Familiarise yourself with the project structure.

The app runs like that
```bash
$ ng serve
```

App is served at [http://localhost:4200](http://localhost:4200).

## Let's start
Make sure there's `<base href="/">` inside the `<header>...</header>`.
[Angular Router](https://angular.io/guide/router#base-href)

### App component
Add `router-outlet` component in the app component's template. 
Create a simple navigation that allows navigating t

### Home route
Define the `''` route that renders the app component.
[Angular Router](https://angular.io/guide/router#define-routes)

### Todos route
Define the `'todos'` route that renders the `todos-list` component.

### Page not found route
Create a simple `PageNotFoundComponent` and define the `'**'` route that renders it.

Note: You may want to set `enableTracing` to `true` when developing the app. 

**Good Luck!**
