import { Component, ViewEncapsulation, TemplateRef, ViewChild, HostBinding } from '@angular/core';
import { menuRouter } from './menus.mock';
import { flyIn } from '../animations/animations';
import { Router, NavigationEnd, ActivatedRoute, PRIMARY_OUTLET } from '@angular/router';
import { TongXService } from '../service/tongxData';
@Component({
    moduleId: module.id,
    selector: 'pages',
    templateUrl: 'pages.component.html',
    styleUrls: ['pages.component.scss'],
    animations: [flyIn],
    encapsulation: ViewEncapsulation.None
})
export class PagesComponent {

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private tx: TongXService
    ) {
        // 判断缓存是否存在mens
        let menus = localStorage.getItem('menus')
        this.menuRouters = menus ? JSON.parse(menus) : menuRouter
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.selectPath = event.url.slice(7)
                this.activeMenuItem({path:this.selectPath})
                // this.sendData(this.selectPath)
                let root: ActivatedRoute = this.route.root;
                this.Breadcrumbs = this.getBreadcrumbs(root);
                //这个数组对象去重的方法很给力
                this.Breadcrumbs = this.Breadcrumbs.reduce((x, y) => x.findIndex(e => e.label == y.label) < 0 ? [...x, y] : x, []);
            }
        });
    }
    menuRouters = menuRouter
    width = 200;
    isSpinning = true
    isCollapsed = false;
    triggerTemplate = null;
    selectPath;
    breadcrumbMenus = [];
    Breadcrumbs = [];
    @ViewChild('trigger') customTrigger: TemplateRef<void>;
    /** custom trigger can be TemplateRef **/
    changeTrigger(): void {
        this.triggerTemplate = this.customTrigger;
    }
    getMenusInfo(menus, menu) {
        console.log(this.menuRouters)
    }
    // 是不是打开的
    openHandler(menus) {
        
    }

    resetPassword() {

    }
    loginOut() {

    }
    private getBreadcrumbs(route: ActivatedRoute, url: string = "", breadcrumbs = []) {
        const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";
        //get the child routes
        let children: ActivatedRoute[] = route.children;
        //return if there are no more children
        if (children.length === 0) {
            return breadcrumbs;
        }
        //iterate over each children
        for (let child of children) {
            //verify primary route
            if (child.outlet !== PRIMARY_OUTLET) {
                continue;
            }
            if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }
            let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");
            if (routeURL) {
                url += `/${routeURL}`;
            }
            let breadcrumb = {
                label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
                params: child.snapshot.params,
                url: url   // 这个visualization是根据自己的跳转路由加的，不然点面包屑死活不跳呀
            };
            breadcrumbs.push(breadcrumb);
            return this.getBreadcrumbs(child, url, breadcrumbs);
        }
        return breadcrumbs;
    }
    activeMenuItem(event) {
        this.selectPath = event.path
        this.menuRouters.map(item => {
            this.activeMenu(item)
        })
        localStorage.setItem('menus', JSON.stringify(this.menuRouters))
    }
    activeMenu(item) {
        if (item.path == this.selectPath) {
            item.isSelectd = true;
            console.log(item);
        } else if (item.isChild == false) {
            item.isSelectd = false;
        } else if (item.isChild == true) {
            item.children.map(key => {
                this.activeMenu(key)
            })
        }
    }
    activeMenuOpen(event) {
        // 暂时考虑  第一季目录的情况
        if (event.path.indexOf('/') != -1) {
            // this.menuRouters.map(menu => {
            //     if (menu.isChild == true) {
            //         menu.children.map(menc => {
            //             if (menu != menc) {
            //                 menc.isOpen = false
            //             }
            //         })
            //     }
            // })
        } else {
            this.menuRouters.map(menu => {
                if (menu.path == event.path) {
                    menu.isOpen = event.isOpen
                }else{
                    menu.isOpen=false;
                }
            })
        }
        // 发生改变之后 对缓存中重新填入数据
        localStorage.setItem('menus', JSON.stringify(this.menuRouters))

    }
    activeOpen({name,val,come}) {
        console.log(name,val,come)
    }
}
