import { Component, OnInit } from '@angular/core';
import { inputSize, dateFormat } from '../../../../service/common';
import { serviceInfoTable } from './serviceInfoEntity';

@Component({
  selector: 'app-service-project-info',
  templateUrl: './service-project-info.component.html',
  styleUrls: ['./service-project-info.component.less']
})
export class ServiceProjectInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  inputSize = inputSize
  dateFormat=dateFormat
  tableName=serviceInfoTable
}
