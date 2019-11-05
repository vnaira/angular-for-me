import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('jsonplaceholder.typicode.com')) {
      const paramReq = req.clone({
        params: req.params.set('userId', '7')
      });
      return next.handle(paramReq);
    }  else {
      return next.handle(req);
    }
  }
}
