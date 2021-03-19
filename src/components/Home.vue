<template>
    <!-- 首页 -->
    <div class="pc_wrap">
        <!-- 後台系統
            v-loading、element-loading-text、element-loading-background、element-loading-spinner 用于定义加载的样式
        -->
        <el-container 
        class="container" 
        v-loading="false"
        element-loading-text="拼命加载中"
        element-loading-background="rgba(0,0,0,0.7)" 
        element-loading-spinner="el-icon-loading"
        >
            <!-- 左侧菜单 -->
            <asideBar :foldAside="foldAside"/>
            <!-- direction="vertical"  用于垂直布局 -->
            <el-container direction="vertical" class="el-container">
                    <!-- header -->
                    <Header :list="list" @foldOrOpenAside="foldOrOpen"/>
                    <!-- 主內容 content -->
                    <el-main class="content">
                        <el-card class="card" shadow="hover">
                            <!-- cache用 使用 <keep-alive>將 <router-view>包起來，使得頁面跳轉時可以 Cache 住前一個畫面 -->
                            <keep-alive> 
                                <router-view/>
                            </keep-alive>
                        </el-card>
                    </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
//局部引入mixin 
import { toggless,data } from '../mixin/tooltip.js'
//引入组件
import asideBar from './common/sub/asideBar.vue' //左侧菜单
import Header from './common/header.vue' //header

export default {
    name:'Home',
    //注册各组件
    components:{
        asideBar,
        Header
    },
    //引入局部mixin (tooltip.js 的toggless)
    mixins:[ toggless,data ],
    data(){
       return{
            data:{
               list:[], //router.js获取的path数据
            },
            foldAside:true
       }
   },
   methods:{
       //子组件header~传回@foldOrOpenAside通过$emit传回
       foldOrOpen(data){
        //    console.log('dataVal',data)
           this.foldAside = data
       }
   },
   mounted(){ //生命周期 -- DOM载入完就执行

    },
    created(){
        //matched方法 获取route.js路由中的路由讯习
        this.list = this.$route.matched
    }
}
</script>

<style scoped>
.bos{
    border:1px solid #ff0000;
}
.none{
    display:none;
}
.mixinBox{
    background-color:#eaeaea;
    padding:20px;
}
.mixinBox p{
    font-size:18px;
    color:#999;
    padding:20px 0;
}

.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body > .el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {  
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}

.el-header{
    background-color:#ddd;
    overflow:hidden;
}
.header_logo{
    width:182px;
    float:left;
}
.header_bread_list{
    height:100%;
    float:left;
    padding:23px 40px 0 40px;
}
.header_logout_btn{
    width:150px;
    float:right;
}


.el-container{
    height:100vh;
}
.el-main{
    background-color:#fff;
}
.item_btn{
    border-bottom:1px solid #ddd;
}
</style>