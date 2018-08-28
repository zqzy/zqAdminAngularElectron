import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable()
// 这个CanDeactivate需要接受一个模板类型 可以 是一个组件。
export class CanDeactivateService implements CanDeactivate<any> {

    constructor(
    ) { }
    canDeactivate(
        component: any,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (component.businessForm.valid == true) {
            return true;
        };
        return component.canDeactivate();
    }
}

//  弹框
// showConfirm(observer) {
//     this.modal.confirm({
//         nzTitle: '你确定离开吗?',
//         nzContent: '您还有东西填写未提交或者未添加',
//         nzOnOk: () => {
//             observer.next(true);
//             observer.complete();
//         },
//         nzOnCancel: () => {
//             observer.next(false);
//             observer.complete();
//         }
//     });
// }
// canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
//     if (this.businessForm.valid == true) {
//         return true;
//     }

//     return new Observable((observer) => {
//         this.showConfirm(observer)
//     });
// }