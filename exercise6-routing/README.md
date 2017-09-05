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
Make sure there's `<base href="/">` inside the `<head>...</head>`.
[Angular Router](https://angular.io/guide/router#base-href)

### App component
Inside the `app` component's template, create a simple navigation that allows access to the routes specified below.

Also, add `router-outlet` element in the `app` component's template.

### Home route
Create a simple `HomePageComponent` displaying text _You're on home page_.

Define the `''` route that renders the `home-page` component.

Experiment with `pathMatch: 'prefix'` and `pathMatch: 'full'`.
[Angular Router](https://angular.io/guide/router#define-routes)

### Todos route
Define the `'todos'` route that renders the `todos-list` component.

### Page not found route
Create a simple `PageNotFoundComponent` and define the `'**'` route that renders it.

Note: You may want to set `enableTracing` to `true` when developing the app. 

**Good Luck!**
