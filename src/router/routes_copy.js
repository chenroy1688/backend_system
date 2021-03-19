//各个page 路由
export const routes = [
  {
    path: '/login', //登陆页
    name:'login',
    meta:{title:'登陆'}, //面包屑
    component: () => import('../components/Login.vue')
  },
  {
    path: '/', //登入后
    name:'home',
    redirect:'/index', //预设进入的首页 
    meta:{title:'首页'}, //面包屑
    component : () => import('../components/Home.vue'), 
    children:[
      { 
        path:'/index',
        name:'index',
        meta:{title:'首页'}, //面包屑
        component:() => import('../components/common/index.vue')
      },
      { //数据统计
        path:'/status',  //这里路径要跟asideBar.vue 路径数据一样
        name:'status',
        meta:{title:'数据统计'}, //面包屑
        component:() => import('../components/common/status.vue')
      },
      { //信席管理
        path:'/manage',
        name:'manage',
        meta:{title:'信习管理'}, //面包屑
        redirect:'/manage',
        components:{
          default: resolve => require(['../components/common/manage/manageA'],resolve)
        },
        children:[
            { //信席管理 / 信席管理A
                path:'/manage/manageA',
                name:'manageA',
                meta:{title:'信习管理A'}, //面包屑
                component:() => import('../components/common/manage/manageA.vue')
            },
            { //信席管理 / 信席管理B
                path:'/manage/manageB',
                name:'manageB',
                meta:{title:'信习管理B'}, //面包屑
                component:() => import('../components/common/manage/manageB.vue')
            }
        ]
      },
      { //用户管理 / 用户管理A
        path:'/user/userA',
        name:'userA',
        meta:{title:'用户管理A'}, //面包屑
        component:() => import('../components/common/user/userA.vue')
      },
      { //用户管理 / 用户管理B
        path:'/user/userB',
        name:'userB',
        meta:{title:'用户管理B'}, //面包屑
        component:() => import('../components/common/user/userB.vue')
      }
    ]
  },
  { //以上路由都没有 导回首页
    path: '*',
    redirect:'/'
  }
]







