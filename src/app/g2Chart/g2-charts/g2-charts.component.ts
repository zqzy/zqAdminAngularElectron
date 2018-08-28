import { Component } from '@angular/core';
import DataSet from '@antv/data-set';
const sourceData = [
    { month: 'Jan', Tokyo: 7.0, London: 3.9 },
    { month: 'Feb', Tokyo: 6.9, London: 4.2 },
    { month: 'Mar', Tokyo: 9.5, London: 5.7 },
    { month: 'Apr', Tokyo: 14.5, London: 8.5 },
    { month: 'May', Tokyo: 18.4, London: 11.9 },
    { month: 'Jun', Tokyo: 21.5, London: 15.2 },
    { month: 'Jul', Tokyo: 25.2, London: 17.0 },
    { month: 'Aug', Tokyo: 26.5, London: 16.6 },
    { month: 'Sep', Tokyo: 23.3, London: 14.2 },
    { month: 'Oct', Tokyo: 18.3, London: 10.3 },
    { month: 'Nov', Tokyo: 13.9, London: 6.6 },
    { month: 'Dec', Tokyo: 9.6, London: 4.8 },
];

const  testdata=[{
    name: 'London',
    'Jan.': 18.9,
    'Feb.': 28.8,
    'Mar.': 39.3,
    'Apr.': 81.4,
    'May': 47,
    'Jun.': 20.3,
    'Jul.': 24,
    'Aug.': 35.6
  }, {
    name: 'Berlin',
    'Jan.': 12.4,
    'Feb.': 23.2,
    'Mar.': 34.5,
    'Apr.': 99.7,
    'May': 52.6,
    'Jun.': 35.5,
    'Jul.': 37.4,
    'Aug.': 42.4
  }]

const dv = new DataSet.View().source(sourceData);
dv.transform({
    type: 'fold',
    fields: ['Tokyo', 'London'],
    key: 'city',
    value: 'temperature',
});
const data = dv.rows;

const scale = [{
    dataKey: 'month',
    min: 0,
    max: 1,
}];
@Component({
    moduleId: module.id,
    selector: 'g2-charts',
    templateUrl: 'g2-charts.component.html',
    styleUrls: ['g2-charts.component.scss']
})
export class G2ChartsComponent {
    forceFit: boolean = false;
    height: number = 400;
    width:number=600;
    data = data;
    scale = scale;
    style = { stroke: '#fff', lineWidth: 1 };

}
