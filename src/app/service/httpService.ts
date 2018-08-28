import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpEvent, HttpResponse } from '@angular/common/http';

import { BASEURL, requestData } from './url';
import { catchError, map, tap, } from 'rxjs/operators';
import { Observable, of } from "rxjs";
import { NzMessageService } from 'ng-zorro-antd';
@Injectable()

export class HttpService {
    constructor(
        private http: HttpClient,
        private msg: NzMessageService
    ) {

    }
    get(url,search?:any): Observable<requestData> {
        return this.http.get<requestData>(url, { observe: 'body',params:search }).pipe(
            map(res => this.extractData(res)),
            catchError(this.handleError1())
        )
    }
    postBody(url, body) {
        return this.http.post(url, body).toPromise()
            .then((res: requestData) => this.extractData(res))
            .catch(err => this.handleError(err))
    }
    postSearch(url, search) {
        return this.http.post(url, null, { params: search }).toPromise()
            .then((res: requestData) => this.extractData(res))
            .catch(err => this.handleError(err))
    }
    // 正确结果处理
    public extractData(res: requestData) {
        console.log(res);
        if (res.errcode == 0) {
            return res.result;
        } else if (res.errcode == 40008) {
            this.msg.error(res.errmsg);
            return
            // 跳转登录页面
        } else {
            this.msg.error(res.errmsg)
            return 
        }
    }
    public handleError(error: any) {
        this.msg.error(error.error.errmsg)
    }

    private handleError1() {
        return (error: any): Observable<requestData> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            //   this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(error as requestData);
        };
    }
}