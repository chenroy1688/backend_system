<template>
    <!-- 菜单 递归 exact 路由地址跟路徑精準匹配 -->
    <!-- 動態递归展示 -->
    <!-- <el-aside width="200px" class="aside" :class="foldAside == true ? '' : 'active'">
        <el-menu 
        :default-active="$route.path" exact 
        class="el-menu-vertical-demo" router>
            <Nav v-for="(v,index) in items" :key="index" :itemObj="v" :basePath="v.url" :icons="v.icon"/>
        </el-menu>
    </el-aside> -->

    <div>
        <!-- 系統logo -->
        <el-aside class="header-logo" :width="asideWidth">
            <div @click="$router.push({ name: 'Home' })">
                <a v-if="foldAside">后台管理中心</a>
                <a v-else>后台管理</a>
            </div>
        </el-aside>
        <!-- 左側菜單 -->
        <el-aside class="aside" :width="asideWidth" :class='"icon-size-" + iconSize'>
            <el-scrollbar style="height:100%; width: 100%;">
                <!--
                    default-active 表示当前选中的菜单，默认为 home。
                    collapse 表示是否折叠菜单，仅 mode 为 vertical（默认）可用。 
                    collapseTransition 表示是否开启折叠动画，默认为 true。
                    exact 精確匹配 
                -->
                <el-menu :default-active="menuActiveName || 'home'" exact :collapse="!foldAside" :collapseTransition="false" 
                background-color="#263238" text-color="#999">
                    <!-- 首頁 -->
                    <el-menu-item index="home" @click="$router.push({ name:'Home' })">
                        <i class="el-icon-s-home"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <!-- 用戶列表 -->
                     <el-menu-item index="userList" @click="$router.push({ name:'userList' })"> <!-- 對應routes.js 的name -->
                        <i class="el-icon-edit-outline"></i>
                        <span slot="title">用戶列表</span>
                    </el-menu-item>
                     <!-- 聯繫我們 -->
                     <el-menu-item index="aboutUs" @click="$router.push({ name:'aboutUs' })">
                        <i class="el-icon-share"></i>
                        <span slot="title">关于我们</span>
                    </el-menu-item>
                    <!-- 帐号管理 -->
                    <el-submenu index="title">
                            <template slot="title">
                                <i class="el-icon-star-off"></i>
                                <span>帐号管理</span>
                            </template>
                            <!-- $router.push({ name:'manageA' }) name對應routes 的name:'manageA' -->
                            <el-menu-item index="manage-A" @click="$router.push({ name:'manageA' })">
                                <i class="el-icon-s-data"></i>
                                <span slot="title">网站地图</span>
                            </el-menu-item>
                            <el-menu-item index="manage-B" @click="$router.push({ name:'manageB' })">
                                <i class="el-icon-document"></i>
                                <span slot="title">帐户清单</span>
                            </el-menu-item>
                    </el-submenu>
                    <!-- 帐户管理 -->
                    <el-submenu index="title2">
                            <template slot="title">
                                <i class="el-icon-phone-outline"></i>
                                <span>客户服务</span>
                            </template>
                            <el-menu-item index="user-A" @click="$router.push({ name:'userA' })">
                                <i class="el-icon-s-data"></i>
                                <span slot="title">问题询问</span>
                            </el-menu-item>
                            <el-menu-item index="user-B" @click="$router.push({ name:'userB' })">
                                <i class="el-icon-document"></i>
                                <span slot="title">数据下载</span>
                            </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-scrollbar>
        </el-aside>
    </div>
</template>

<script>
//引入组件
import Nav from './nav.vue' //递归 左侧菜单

export default {
    name:'Aside',
    props:{
        //aside開關
        foldAside:{
            type:Boolean,
            default:false
        }
    },
    components:{
        Nav
    },
   data(){
       return{
        // 保存当前选中的菜单
        menuActiveName: 'home',
        // 保存当前侧边栏的宽度
        asideWidth: '200px',
        // 用于拼接当前图标的 class 样式
        iconSize: 'true',
        //左侧aside 菜单数据
          items:[
              {
                  name:'首页',
                  icon:'el-icon-edit-outline',
                  url:'/'
              },
              {
                  name:'数据统计', //第一层
                  icon:'el-icon-date',
                  url:'/status'
              },
              {
                  name:'信习管理',
                  icon:'el-icon-edit',
                  url:'/manage',
                  child:[
                      {
                        name:'信习管理A',
                        icon:'el-icon-edit',
                        url:'/manage/manageA'
                      },
                      {
                        name:'信习管理B',
                        icon:'el-icon-edit',
                        url:'/manage/manageB'
                      }
                  ]
              },
              {
                  name:'用户管理',
                  icon:'el-icon-check',
                  url:'/user',
                  child:[
                      {
                        name:'用户管理A',
                        icon:'el-icon-check',
                        url:'/user/userA'
                      },
                      {
                        name:'用户管理B',
                        icon:'el-icon-check',
                        url:'/user/userB'
                      }
                  ]
              }
          ]
       }
   },
   watch:{
       // 监视是否折叠侧边栏，折叠则宽度为 64px。
       foldAside(val){
            this.asideWidth = val ? '200px' : '64px'
            this.iconSize = val
       }
   },
   created(){
       
   },
   monted(){
       //page載入立即執行
    //    this.getNav()
   },
   methods:{
       //模擬 從後端串接api取得 左側選單數據進行渲染
    //    getNav(){
    //        this.$http.get('/get_nav').then(res => {
    //            let (code,result) = res.data
    //            if(code == '200'){
    //                this.items = result
    //            }
    //        })
    //    }
   }
}
</script>

<style scoped>
.aside {
    margin-bottom: 0;
    height: 100%;
    max-height: calc(100% - 50px);
    width: 100%;
    max-width: 200px;
    background-color: #263238;
    text-align: left;
    right: 0;
}

.header-logo {
    background-color: #17b3a3;
    text-align: center;
    height: 50px;
    line-height: 50px;
    width: 200px;
    font-size: 24px;
    color: #fff;
    font-weight: bold;
    margin-bottom: 0;
    cursor: pointer;
    overflow:hidden;
}
.el-submenu .el-menu-item {
    max-width: 200px !important;
}
.el-scrollbar__wrap {
    overflow-x: hidden !important;
}
.icon-size-false i {
    font-size: 30px !important;
}
.icon-size-true i {
    font-size: 18px !important;
}
</style>