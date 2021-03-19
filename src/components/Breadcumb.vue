<template>
    <div>
       <!-- header 麵包屑 -->
        <div class="breadcumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="(items,index) in metaList" :key="index">
                    <!-- router-link 連結至對應的路徑 -->
                    <router-link :to="items.path"> 
                        {{ items.meta.title }}
                    </router-link>
                </el-breadcrumb-item> 
            </el-breadcrumb>
        </div>
    </div>
</template>

<script>
export default {
   props:{
    
   },
   data(){
      return{
         metaList:[]
      }
   },
    created(){
        //獲取路由的val
        this.metaList = this.$route.matched
   },
   watch:{
       //監聽路由,點擊後麵包屑同步切換
       $route(to,from){ //to 要前往的匹配路由
            //去除麵包屑第二層的"首頁"
            if(to.matched[1].meta.title == '首頁') {
                to.matched[1].meta.title = ''
                // delete to.matched[Object.keys(to.matched)[1]]
            }
            this.metaList = to.matched
       }
   }
}
</script>

<style scoped>
/* ------------------------------
   麵包屑
------------------------------ */
.breadcumb{
    width:400px;
}

</style>