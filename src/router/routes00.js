//二級路由
import Contact from '../components/common/about/contact.vue'
import History from '../components/common/about/History.vue'
import Deilvery from '../components/common/about/Deilvery.vue'
import OrderingGuide from '../components/common/about/OrderingGuide.vue'
//三級路由
import Phone from '../components/common/about/third/Phone.vue'
import PersonName from '../components/common/about/third/PersonName.vue'

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
    redirect:{ //
      name:'HomePage'
    },
    children:[
      {
        path:'/Home', //登入後 預設页
        name:'HomePage',
        meta:{title:'首頁'}, //面包屑
        component:() => import('../components/common/index.vue')
      },
      { //用戶列表
        path:'/userList',
        name:'userList',
        meta:{title:'用戶列表'}, //面包屑
        component:() => import('../components/common/userList.vue')
      },
      { //聯繫我們
        path:'/account', //預設容器為 about/index.vue
        name:'account',
        redirect:'/common/about/contact',
        meta:{
          title:'關於我們',
          keepAlive:false
        },
        components:{
          default:resolve => require(['../components/common/about/index'],resolve),
        },
        children:[ //二級路由設定
          {
            path:'/about/contact',
            name:'contactLink',
            redirect:'/personname',
            component:Contact,
            // children:[ //三級路由
            //   {
            //     path:'/phone',
            //     name:'phomeNumber',
            //     component:Phone,
            //     meta:{
            //       title:'聯繫音速/phone'
            //     }
            //   },
            //   {
            //     path:'/personname',
            //     name:'personName',
            //     component:PersonName,
            //     meta:{
            //       title:'联系音速 / 网站联系人'
            //     }
            //   }
            // ]
          },
          { //歷史訂單page
            path:'/History',
            name:'historyLink',
            component:History,
            meta:{
              title:'历史订单分页'
            }
          }, 
          { //快遞訊息
            path:'/Deilvery',
            name:'deliveryLink',
            component:Deilvery,
            meta:{
              title:'快递讯席分页'
            }
          }, 
          { //點餐文黨
            path:'/OrderingGuide',
            name:'OrderingGuldeLink',
            component:OrderingGuide,
            meta:{
              title:'点餐服务分页'
            }
          } 
        ]
      },
      { //帐号管理 - 网站地图
        path:'/Home/manage/manageA',
        name:'manageA',
        meta:{title:'帐号管理 / 网站地图'}, //面包屑
        component:() => import('../components/common/manage/manageA.vue')
      },
      { //帐号管理 - 帐号清单
        path:'/Home/manage/manageB',
        name:'manageB',
        meta:{title:'帐号管理 / 帐号清单'}, //面包屑
        component:() => import('../components/common/manage/manageB.vue')
      },
      { //客户服务 - 问题询问
        path:'/Home/user/userA',
        name:'userA',
        meta:{title:'客户服务 / 问题询问'}, //面包屑
        component:() => import('../components/common/user/userA.vue')
      },
      { //客户服务 - 数据下载
        path:'/Home/user/userB',
        name:'userB',
        meta:{title:'客户服务 / 数据下载'}, //面包屑
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








