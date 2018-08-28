import { Component, OnInit ,HostBinding} from '@angular/core';
import { flyIn } from '../../../../animations/animations';
import { inputSize, dateFormat } from '../../../../service/common';
import { joinstoreInfoTable } from './joinstoreInfoEntity';

@Component({
  selector: 'app-joinstore-info',
  templateUrl: './joinstore-info.component.html',
  styleUrls: ['./joinstore-info.component.less'],
  animations:[flyIn],
})
export class JoinstoreInfoComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  test="getData()";
  inputSize = inputSize
  dateFormat=dateFormat
  tableName=joinstoreInfoTable
  isdisable=true;
  getData(){
    console.log(22)
  }
}
