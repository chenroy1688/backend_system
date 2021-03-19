//各个page 路由
export const routes = [
  {
    path: '/', //登陆页
    redirect:{
      name:'Login'
    }
  },
  {
    path: '/404', //404
    name:'404',
    meta:{title:'404'}, //面包屑
    component: () => import('../components/common/404.vue')
  },
  {
    path: '/Login', //login
    name:'Login',
    meta:{title:'登入页'},
    component: () => import('../components/Login.vue')
  },
  { //臨時儲存
    path: '/Home',  
    name:'Home',
    meta:{title:'首頁'}, //面包屑
    component: () => import('../components/Home.vue'),
    redirect:{
      name:'inHome' //inHome 對應登入後的預設頁面 當點到別頁再點回首頁 才能匹配首頁
    },
    children:[ //左側選單對應路由
      {
        path:'/Home', //登入後 預設页也是首頁
        name:'inHome',
        meta:{title:'首頁'}, //面包屑
        component:() => import('../components/common/index.vue') //index.vue為預設首頁
      },
      { //用戶列表
        path:'/userList',
        name:'userList',
        meta:{title:'用戶列表'}, //面包屑
        component:() => import('../components/common/userList.vue')
      },
      { //聯繫我們
        path:'/about/contact', //預設容器為 about/index.vue
        name:'aboutUs',
        meta:{title:'關於我們'},
        component:() => import('../components/common/about/index.vue'),
        redirect:{ //重新定向到about/contact.vue
          name:'contactLink' //預設進入的page 目前預設頁為 /about/contact.vue
        },
        children:[ //二級路由
            { //關於我們
              path:'/about/contact',
              name:'contactLink',
              component:() => import('../components/common/about/contact.vue'),
              redirect:{ //重新定向到 /about/contact/PersonName.vue
                name:'phomeNumber'
              },
              children:[ //三級路由
                  { //電話資訊
                    path:'/about/contact/PersonName',
                    name:'phomeNumber',
                    component:() => import('../components/common/about/third/PersonName.vue')
                  },
                  { //合作聲明
                    path:'/about/contact/Phone',
                    name:'personName',
                    component:() => import('../components/common/about/third/Phone.vue')
                  }
              ]
            },
            { //免責聲明
              path:'/about/History',
              name:'historyLink',
              component:() => import('../components/common/about/History.vue')
            },
            { //隱私政策
              path:'/about/Deilvery',
              name:'deliveryLink',
              component:() => import('../components/common/about/Deilvery.vue')
            }
        ]
      },
      { //帐号管理 - 网站地图
        path:'/manage/manageA',
        name:'manageA',
        meta:{title:'帐号管理 / 网站地图'}, //面包屑
        component:() => import('../components/common/manage/manageA.vue')
      },
      { //帐号管理 - 帐号清单
        path:'/manage/manageB',
        name:'manageB',
        meta:{title:'帐号管理 / 帐号清单'},
        component:() => import('../components/common/manage/manageB.vue')
      },
      { //客户服务 - 问题询问
        path:'/user/userA',
        name:'userA',
        meta:{title:'客户服务 / 问题询问'},
        component:() => import('../components/common/user/userA.vue')
      },
      { //客户服务 - 数据下载
        path:'/user/userB',
        name:'userB',
        meta:{title:'客户服务 / 数据下载'},
        component:() => import('../components/common/user/userB.vue')
      }
    ]
  },
  { //以上路由都没有 导回首页
    path: '*',
    redirect:'/'
  }
]

// const router = new VueRouter({
//   // routes 用于定义 路由跳转 规则
//   routes,
//   // mode 用于去除地址中的 #
//   mode: 'history',
//   // scrollBehavior 用于定义路由切换时，页面滚动。
//   scrollBehavior: () => ({
//       y: 0
//   })
// })

// 解决相同路径跳转报错
// const routerPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location, onResolve, onReject) {
//   if (onResolve || onReject)
//       return routerPush.call(this, location, onResolve, onReject)
//   return routerPush.call(this, location).catch(error => error)
// };








