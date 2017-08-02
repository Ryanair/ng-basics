import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class GitHubInterceptor implements HttpInterceptor {
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // user:emails:read-only
    const token = 'token a700db94fcd3845a0cb3dabaacabd83ed30b0b38';

    // TODO: alter request url and headers
    const newReq = req.clone({
      url: req.url.replace('http://', 'https://'),
      headers: req.headers.set('Authorization', token)
    });

    // TODO: showcase url change
    console.info(req);
    console.info(newReq);

    return next.handle(newReq)
      // TODO: apply some kind of filtering
      .filter((res: HttpEvent<any>) => res.type === HttpEventType.Response)
      // TODO: prove that filtering works
      .map((res: HttpEvent<any>) => {
        console.warn('response mapped');
        return res;
      })
  }
}
