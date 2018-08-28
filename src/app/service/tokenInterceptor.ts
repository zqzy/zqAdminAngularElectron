
import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASEURL } from './url';

@Injectable()
export class tokenInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // 次拦截器 只做token的存放
        let token = localStorage.getItem('token')|| 'login';
        let clone = req.clone(
            {
                headers: req.headers.set('Authorization', `Bearer ${token}`),
                url: BASEURL + req.url
            })
        return next.handle(clone);
    }
}
