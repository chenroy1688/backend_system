<template>
    <el-aside width="200px" class="aside" :class="foldAside == true ? '' : 'active'">
        <!-- 菜单 递归 exact 路由地址跟路徑精準匹配 -->
        <el-menu 
        :default-active="$route.path" exact 
        class="el-menu-vertical-demo" router>
            <!-- 動態递归展示 -->
            <Nav v-for="(v,index) in items" :key="index" :itemObj="v" :basePath="v.url" :icons="v.icon"/>
        </el-menu>
    </el-aside>
</template>

<script>
//引入组件
import Nav from './nav.vue' //递归 左侧菜单

export default {
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
   created(){
       
   },
   methods:{

   }
}
</script>

<style scoped>
.aside.active{
    /* display:none; */
    position:absolute;
    left:-201px;
    transition:all 0.5s;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}
/* 
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
} */
</style>