import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class GitHubService {
  private github: string = 'http://api.github.com';

  constructor(private http: HttpClient) {}

  public getUser(user: string): Observable<HttpResponse<any>> {
    return this.http.get(`${this.github}/users/${user}`);
  }

  public getEmails(): Observable<HttpResponse<any>> {
    return this.http.get(`${this.github}/user/emails`);
  }
}
