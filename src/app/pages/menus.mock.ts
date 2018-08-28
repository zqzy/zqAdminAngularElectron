export const menuRouter = [
    {
        path: 'welcom', menuName: '首页', isChild: false, icon: '', isSelectd: false
    },
    {
        path: 'basicInfo', menuName: '基础数据', isChild: true, icon: '', isOpen: false, children: [
            {
                path: 'basicInfo/store', menuName: '门店管理', isChild: true, icon: '', isOpen: false,
                children: [{
                    path: 'basicInfo/store/storeInfo', menuName: '门店信息', icon: '', isSelectd: false, isChild: false
                }, {
                    path: 'basicInfo/store/joinstoreInfo', menuName: '加盟门店信息', icon: '', isSelectd: false, isChild: false
                }]
            }, {
                path: 'basicInfo/serviceProject', menuName: '服务项管理', isChild: true, icon: '',
                 children: [
                    { path: 'basicInfo/serviceProject/serviceInfo', menuName: '服务项信息', isChild: false, icon: '', isSelectd: false }
                ]
            }

        ]
    }
]
