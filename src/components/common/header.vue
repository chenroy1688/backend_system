<template>
    <div class="header">
        <!-- header -->
                <!-- 是否展开侧边栏 -->
                <div class="header-title" @click="foldOrOpen">
                    <a class="el-icon-s-fold" v-if="foldAside" title="折叠侧边栏"></a>
                    <a class="el-icon-s-unfold" v-else title="展开侧边栏"></a>
                </div>
                
                <!-- 面包屑 -->
                <div class="header_bread_list">
                    <!-- <Breadcrumb /> -->
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item v-for="(v,index) in list" :key="index">
                                <router-link :to="v.path">{{ v.meta.title }}</router-link>
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                </div>

                <!-- 设置、文档、用户设置等 -->
                <div class="header-menu">
                    <el-menu mode="horizontal" class="header-menu-aubmenu">
                        <!-- 设置 -->
                        <!-- <el-menu-item title="设置" index="1">
                            <i class="el-icon-setting"></i>设置
                        </el-menu-item> -->
                        <!-- 帮助文挡 -->
                        <!-- <el-submenu title="帮助" index="2">
                                <template slot="title">
                                    <i class="el-icon-info"></i>帮助
                                </template>
                                <el-menu-item index="2-1">
                                    <a href="https://www.cnblogs.com/l-y-h/" target="_blank" class="header-submenu-a">博客地址</a>
                                </el-menu-item>
                                <el-menu-item index="2-2">
                                    <a href="https://www.cnblogs.com/l-y-h/" target="_blank" class="header-submenu-a">代码地址</a>
                                </el-menu-item>
                        </el-submenu> -->

                        <el-submenu title="用户设置" index="3">
                                <template slot="title">
                                    <span class="header-span">
                                        {{ username }}
                                    </span>
                                </template>
                                <!-- 修改密碼 btn -->
                                <el-menu-item index="3-1" @click="showPasswordBox">
                                    <i class="el-icon-edit"></i>修改密码
                                </el-menu-item>
                                <!-- 登出 btn -->
                                <el-menu-item index="3-2" @click="logout">
                                    <i class="el-icon-close"></i>登出
                                </el-menu-item>
                        </el-submenu>
                    </el-menu>
                </div>
                <!-- 密码修改框 -->
                <UpdatePassword v-if="UpdatePasswordVisible" ref="updatePassowrd"></UpdatePassword>
    </div>
</template>

<script>
import UpdatePassword from './UpdatePassword.vue'
import Breadcrumb from '../Breadcumb.vue'

export default {
   components:{
       // 引入密码框组件
       UpdatePassword,
       Breadcrumb
   },
   props:{
       list:Array
   },
   data(){
       return{
            // 是否展开侧边栏
            foldAside: true,
            // 默认用户名
            username: 'admin',
            // 是否展开密码修改框
            UpdatePasswordVisible: false
       }
   },
   created(){
       
   },
   methods:{
       //展开密码修改筐
        showPasswordBox() {
            //open
            this.UpdatePasswordVisible = true
            // this.$nextTick 表示数据渲染后，执行密码框初始化
            this.$nextTick(() => {
                    this.$refs.updatePassowrd.init()
                })
        },
       //展开侧边栏
       foldOrOpen() {
            this.foldAside = !this.foldAside
            // this.$emit 用于触发父组件的方法，并传递参数值
            this.$emit("foldOrOpenAside", this.foldAside)
        },
       //退出
       logout(){
           sessionStorage.removeItem('username'); //退出时 删除token
           this.$router.push('/login');
       }
   }
}
</script>

<style scoped>
.el-menu.el-menu--horizontal{
    border-style:none;
}
.bos{
    border:1px solid #ff0000;
}
.header {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
}
.header-title {
    height: 50px;
    width: 50px;
    float: left;
    font-size: 50px;
    cursor: pointer;
}
.header-menu {
    height: 50px;
    width: 22%;
    line-height: 50px;
    font-size: 30px;
}
.header-menu-submenu {
    float: right;
}
.header-submenu-a {
    text-decoration: none;
    color: #4CC4B8;
    font-weight: bold;
    font-size: 16px;
}
.header-submenu-a:hover {
    background-color: #2C3E50;
}
.el-menu--horizontal>.el-menu-item,
.el-menu--horizontal>.el-submenu .el-submenu__title {
    height: 50px !important;
    line-height: 50px !important;
}
.el-menu--collapse .el-menu .el-submenu, .el-menu--popup {
    min-width: auto !important;
}
.header-span img {
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin: 5px 10px 10px 10px;
}
.header-span {
    font-size: 20px;
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