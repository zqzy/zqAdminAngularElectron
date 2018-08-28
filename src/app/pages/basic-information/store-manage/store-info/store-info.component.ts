import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { inputSize, dateFormat } from '../../../../service/common';
import { storeInfoTable, storeInfoParams } from './storeInfoEntity';
import { flyIn } from '../../../../animations/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-info',
  templateUrl: './store-info.component.html',
  styleUrls: ['./store-info.component.less'],
  encapsulation:ViewEncapsulation.None,
  animations:[flyIn],
  host:{'@flyIn':''}
})
export class StoreInfoComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  inputSize = inputSize
  dateFormat=dateFormat
  tableName=storeInfoTable

  // 固定对象值
  searchParam:storeInfoParams=new storeInfoParams();

  // 新增门店
  addUpdataStore(){
      this.router.navigate(['pages/basicInfo/store/addUpdataStore'])
  }
}
