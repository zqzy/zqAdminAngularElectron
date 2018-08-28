import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PagedParams } from '../service/common';

@Component({
  selector: 'self-table',
  templateUrl: './self-table.component.html',
  styleUrls: ['./self-table.component.less']
})
export class SelfTableComponent implements OnInit {

  constructor() { 
    console.log(1111);
  }
  ngOnInit(): void {
  }
  @Input() apiUrl: string;
  @Input() nzScroll: any = { x: '800px' };
  @Input() isCheckBox: boolean = true
  @Input() set RouterUrl(routerUrl: string) {
    this._routerUrl = routerUrl;
  }
  get RouterUrl() { return this._routerUrl }
  @Input() set Params(data: any) {
    this._params = data;
    this.getDataList();
  }
  get Params() { return this._params };
  @Input() root: Array<any> = [1];//权限
  @Input() tableThName: Array<any>
  @Output() retreatData = new EventEmitter();
  @Output() editData = new EventEmitter();
  @Output() resetData = new EventEmitter();
  @Output() detailData = new EventEmitter();
  @Output() checkedData = new EventEmitter();
  @Output() InputData = new EventEmitter();

  _params:PagedParams=new PagedParams()
  _routerUrl
  indeterminate = false;
  displayData = [];
  allChecked = false;
  dataSet = [];
  total = 1;
  pageSize;

  //全选 或者不全选
  checkAll(value: boolean): void {
    this.displayData.forEach(data => {
      if (!data.disabled) {
        data.checked = value;
      }
    });
    this.turnData();
    this.refreshStatus();
  }
  refreshStatus(): void {
    const allChecked = this.displayData.filter(value => !value.disabled).every(value => value.checked === true);
    const allUnChecked = this.displayData.filter(value => !value.disabled).every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
  }

  currentPageDataChange($event): void {
    this.displayData = $event;
  }

  // 当改变一个选中项的时候
  CheckedChange(val) {
    this.refreshStatus();
    if (val) {
      this.turnData();
    }
  }
  // 改变当前页
  PageIndexChange(val) {
    this._params.pageIndex = val;
    this.getDataList()
  }
  // 改变每页显示条数
  PageSizeChange(val) {
    this._params.pageSize = val;
    this.getDataList();
  }
  //   获取列表数据
  getDataList() {
  }


  turnData() {
    let data = [];
    for (const item of this.dataSet) {
      if (item.checked == true) {
        data.push(item);
      }
    }
    this.checkedData.emit(data);
  }

}
