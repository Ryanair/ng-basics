import { Component, OnInit } from '@angular/core';
import { HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';

import { GitHubService } from "./github.service";

@Component({
  selector: 'app-root',
  template: ``,
})
export class AppComponent implements OnInit {
  public user: Observable<HttpResponse<any>>;
  public emails: Observable<HttpResponse<any>>;

  constructor(private gitHubService: GitHubService) {}

  public ngOnInit(): void {
    // TODO: demo getUser method
    this.user = this.gitHubService.getUser('jakubbarczyk');

    this.user
      .subscribe(
        (data) => console.info(data),
        (error) => console.error(error),
        () => console.log('Completed: getUser')
      );

    // TODO: demo getEmails method
    this.emails = this.gitHubService.getEmails();

    this.emails
      .subscribe(
        (data) => console.info(data),
        (error) => console.error(error),
        () => console.log('Completed: getEmails')
      );
  }
}
