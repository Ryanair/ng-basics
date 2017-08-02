import { BrowserModule } from "@angular/platform-browser";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";


import { AppComponent } from "./app.component";
import { GitHubService } from "./github.service";
import { GitHubInterceptor } from "./github.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // TODO: remember to import the module
    HttpClientModule
  ],
  providers: [
    GitHubService,
    // TODO: provide HTTP_INTERCEPTORS
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GitHubInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
