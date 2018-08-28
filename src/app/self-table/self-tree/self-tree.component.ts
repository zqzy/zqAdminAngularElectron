import { Component, OnInit,ViewChild } from '@angular/core';
import { NzTreeNode ,NzTreeComponent} from 'ng-zorro-antd';

@Component({
  selector: 'app-self-tree',
  templateUrl: './self-tree.component.html',
  styleUrls: ['./self-tree.component.less']
})
export class SelfTreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('nzTree') nzTree: NzTreeComponent;

  nodes = [
    new NzTreeNode({
      title   : 'root1',
      key     : '1001',
      expanded: true,
      children: [
        {
          title   : 'child1',
          key     : '10001',
          children: [
            {
              title   : 'child1.1',
              key     : '100011',
              isLeaf  : true,
              checked : true,
              // disabled: true
            },
            {
              title   : 'child1.2',
              key     : '100012',
              children: [
                {
                  title   : 'grandchild1.2.1',
                  key     : '1000121',
                  isLeaf  : true,
                  checked : true,
                  // disabled: true
                },
                {
                  title : 'grandchild1.2.2',
                  key   : '1000122',
                  isLeaf: true
                }
              ]
            }
          ]
        }
      ]
    })
  ];

  mouseAction(name: string, e: any): void {
    console.log(this.nodes[0].origin);
  }
  test(){
    let tmp=[]
    this.nzTree.getCheckedNodeList().map(item=>{
        this.getServiceid(item)
    })
    
    console.log(tmp);
    console.log(this.nzTree.getSelectedNodeList());
    console.log(this.nzTree.getCheckedNodeList());
  }
      // 获取维修项的id
      getServiceid(key) {
        if (key.children.length >= 1) {
            key.children.map(item => { this.getServiceid(item) })
        } else if (key.isChecked == true) {
            console.log(key.origin)
        }
    }
}
