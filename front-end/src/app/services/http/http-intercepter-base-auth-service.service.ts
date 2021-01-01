import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBaseAuthServiceService implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let userName = `eslam`;
    let password = `eslam`;
    let basicAuthHeaderString = `Basic ` + window.btoa(userName + `:` + password); // 64

    request = request.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    })
    return next.handle(request);
  }


}
