import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    onstructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        if (sessionStorage.getItem('username') && sessionStorage.getItem('basicauth')) {
            req = req.clone({
                setHeaders: {
                    Authorization: sessionStorage.getItem('basicauth')
                }
            })
        }

        return next.handle(req);

    }
}