import { Component, ViewChild, ComponentFactoryResolver, ElementRef, Renderer2 } from '@angular/core';
import { menuRouter } from '../menus.mock';
import { AdDirective } from '../../service/AdDirective';
import { SelfTableComponent } from '../../self-table/self-table.component';
import { serviceInfoTable } from '../basic-information/service-project/service-project-info/serviceInfoEntity';

@Component({
    moduleId: module.id,
    selector: 'welcome',
    templateUrl: 'welcome.component.html',
    styleUrls: ['welcome.component.scss']
})
export class WelcomeComponent {

    // G2Data = [{
    //     month: 'Jan',
    //     Tokyo: 7.0,
    //     London: 3.9
    // }, {
    //     month: 'Feb',
    //     Tokyo: 6.9,
    //     London: 4.2
    // }, {
    //     month: 'Mar',
    //     Tokyo: 9.5,
    //     London: 5.7
    // }, {
    //     month: 'Apr',
    //     Tokyo: 14.5,
    //     London: 8.5
    // }, {
    //     month: 'May',
    //     Tokyo: 18.4,
    //     London: 11.9
    // }, {
    //     month: 'Jun',
    //     Tokyo: 21.5,
    //     London: 15.2
    // }, {
    //     month: 'Jul',
    //     Tokyo: 25.2,
    //     London: 17.0
    // }, {
    //     month: 'Aug',
    //     Tokyo: 26.5,
    //     London: 16.6
    // }, {
    //     month: 'Sep',
    //     Tokyo: 23.3,
    //     London: 14.2
    // }, {
    //     month: 'Oct',
    //     Tokyo: 18.3,
    //     London: 10.3
    // }, {
    //     month: 'Nov',
    //     Tokyo: 13.9,
    //     London: 6.6
    // }, {
    //     month: 'Dec',
    //     Tokyo: 9.6,
    //     London: 4.8
    // }];

    // G2Data2 = [{
    //     name: 'London',
    //     'Jan.': 18.9,
    //     'Feb.': 28.8,
    //     'Mar.': 39.3,
    //     'Apr.': 81.4,
    //     'May': 47,
    //     'Jun.': 20.3,
    //     'Jul.': 24,
    //     'Aug.': 35.6
    // }, {
    //     name: 'Berlin',
    //     'Jan.': 12.4,
    //     'Feb.': 23.2,
    //     'Mar.': 34.5,
    //     'Apr.': 99.7,
    //     'May': 52.6,
    //     'Jun.': 35.5,
    //     'Jul.': 37.4,
    //     'Aug.': 42.4
    // }];
    // G2Field = ['Tokyo', 'London'];
    // G2Field1 = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.'];
    // setData() {
    //     this.G2Data[5].Tokyo += 10;
    //     this.G2Data[5].London += 12;
    //     this.G2Data = [...this.G2Data];
    // }

    @ViewChild(AdDirective) adHost: AdDirective;
    interval: any;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
        private el: ElementRef,
        private render: Renderer2
    ) { }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        // this.render.
        // this.el.nativeElement.querySelector(".antd")
        this.loadComponent()
    }
    loadComponent() {
        // this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
        // let adItem = this.ads[this.currentAdIndex];

        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(SelfTableComponent);

        let viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.tableThName = serviceInfoTable
        // (<AdComponent>componentRef.instance).data = adItem.data;
    }
}
