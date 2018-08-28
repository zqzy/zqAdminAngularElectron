import { Component, Output, EventEmitter, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { TongXService } from '../../service/tongxData';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-self-menu-child',
  templateUrl: './self-menu-child.component.html',
  styleUrls: ['./self-menu-child.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class SelfMenuChildComponent implements OnInit {

  constructor(
    private tx: TongXService
  ) {
    // this.unsunscription=this.tx.getMenuSubject().subscribe(res=>{
    //     console.log(res);
    //     this.selectPath=res;
    //     console.log(this.selectPath)

    //   })
  }

  ngOnInit() {
  }
  @Input() menuChild
  @Output() clickEmit: EventEmitter<any> = new EventEmitter()
  @Output() clickOpen: EventEmitter<any> = new EventEmitter()//本想控制所有的有展开按钮   现在这个方法不起作用 没有做太多处理
  unsunscription: Subscription
  openHandler(menus) {
  }
  ngOnDestroy(): void {

  }
}
