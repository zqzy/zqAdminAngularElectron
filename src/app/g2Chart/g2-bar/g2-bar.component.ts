import { Component, Input } from '@angular/core';
import * as G2 from '@antv/g2';
import { DataSet } from '@antv/data-set';
@Component({
    moduleId: module.id,
    selector: 'g2-bar',
    templateUrl: 'g2-bar.component.html',
    styleUrls: ['g2-bar.component.scss']
})
export class G2BarComponent {


    constructor() {
        this.ds = new DataSet()


    }
    ngOnInit(): void {
        console.log(new Date())

        this.chart = new G2.Chart({
            container: 'bar',
            width: this.G2With,
            height: this.G2Height
        });
        this.dv = this.ds.createView().source(this._G2Data);

        this.dv.transform({
            type: 'fold',
            fields: this.field, // 展开字段集
            key: 'city', // key字段
            value: 'temperature' // value字段
        });
        console.log(this.dv.rows);
        this.chart.source(this.dv.rows);
        // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
        this.chart.interval().position('month*temperature').color('city').adjust([{
            type: 'dodge',
            marginRatio: 1 / 32
        }]);

        // Step 4: 渲染图表
        this.chart.render();

    }
    // 变量
    chart;
    _G2Data = [];
    dv;
    ds;
    @Input() set G2Data(data: any) {
        console.log(new Date())
        this._G2Data = data;
        // 没有想到第一次就会成功
        // 当不设置状态值 是 会自动监听所有的值
        this.ds.setState();
        // 这种是监听 没使用dataset是  监听数据变化
        if (this.chart) {
            // this.chart.changeData(data);
        }
        console.log(this.chart);
    };
    get G2Data() {
        return this._G2Data;
    }
    @Input() G2With: number = 600;
    @Input() G2Height: number = 300;
    @Input() field: Array<any> = [];
    // 数据渲染
    initBarData() {
        // this.chart.changeData();

    }

}
