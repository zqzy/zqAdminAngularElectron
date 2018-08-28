import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable()
export class TongXService {
    private MenuSubject: Subject<any> = new Subject<any>();
    setMenuSubject(data: any): void {
        this.MenuSubject.next(data);
    }
    getMenuSubject(): Observable<any> {
        return this.MenuSubject.asObservable()
    }
}