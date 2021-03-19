<template>
    <!-- 递归 菜单 -->
    <div>
        <!-- 无子级 -->
        <el-menu-item :index="basePath" class="item_btn" v-if="!itemObj.child"> <!-- 判断是否有子级 数据的child 有=>显示子级 -->
            <i :class="itemObj.icon"></i>
            <span slot="title">{{ itemObj.name }}</span>
        </el-menu-item>
        <!-- 有子级 -->
        <el-submenu :index="basePath" class="item_btn" v-else>
            <template slot="title">
                <i :class="itemObj.icon"></i>
                <span>{{ itemObj.name }}</span>
            </template>
            <!-- 递归 子級 自己调用自己 -->
            <Nav v-for="(child,index) in itemObj.child" :key="index" :itemObj="child" :basePath="child.url"/>
        </el-submenu>
    </div>

    <!--  父曾 傳遞數據給子曾 --------
        props: {
            // 基礎型別檢測 (`null` 允許任何類型)
            propA: Number,
            // 可能是多種型別
            propB: [String, Number],
            // 必須要傳送的數據及`String`型別
            propC: {
                type: String,
                required: true
            },
            // 數據有預設值及`Number`型別
            propD: {
                type: Number,
                default: 100
            },
            // 陣列/物件的的預設值由function提供
            propE: {
                type: Object,
                default: function () {
                    return { message: 'hello' }
                }
            },
            // 自定義驗證函數
            propF: {
                validator: function (value) {
                    return value > 10
                }
        }
    -->
</template>

<script>
export default {
    name:'Nav',
    //父层传入数据
    props:['itemObj','basePath','icons'], 
    data(){
        return{
        }
    },
    created(){
        
    },
    methods:{

    }
}
</script>

<style scoped>
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
    /* height:calc(100vh - 80px); */
    height:100vh;
}
.el-main{
    background-color:#fff;
}
.item_btn{
    border-bottom:1px solid #ddd;
}
</style>