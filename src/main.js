import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router' //引入路由
import { routes } from './router/routes'   //导入router规则
import axios from 'axios'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import store from './store'

//全局統一路徑
// import { publicPath } from '../vue.config'

//引入css
// import './assets/css/reset.css'
import './assets/css/common.css' //全局設定
import 'element-ui/lib/theme-chalk/index.css'

//全局 -- 引入外部scss档案
// import './assets/style/total.scss'

//引入js
import './assets/js/jquery-3.2.1.min.js'
import './assets/js/jquery-ui.min.js'

Vue.config.productionTip = false

//使用router
Vue.use(Router)
Vue.use(ElementUI)

// 将axios绑定给$axios属性
// axios.defaults.baseURL = 'http://127.0.0.1:8080' //預設地址
Vue.prototype.$http = axios

//全局引入echarts
Vue.prototype.$echarts = echarts

const router = new Router({
  // base:publicPath,
  routes,
  mode: 'history'
})

//路由守卫导航 /login 登入page  to:進入哪個  from:離開哪個  next:進行至下個
router.beforeEach((to, from, next) => {
  //取得登陆 localStorage value
  const isLogin = sessionStorage.getItem('username') == 'admin'

  if( isLogin ){
    next();
  } else {
    //路径不为login 导向login
    if( to.path !== '/login')
      next('/login');
    else
      next();
  }
});


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
