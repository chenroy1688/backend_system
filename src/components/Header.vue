<template>
        <!-- header区块 -->
        <header class="header">
            <!-- 主选单 -->
            <div class="menuBtn">
                <router-link to="/">首页</router-link>
                <router-link to="/Product">体育直播</router-link>
                <router-link to="/gamePlay">赛事回放</router-link>
                <router-link to="/portFolio">优惠活动</router-link>
                <a href="#" @click.prevent="logout" class="logoutBtn">登出</a>
            </div>
        </header>
</template>

<script>

export default {
   data(){
      return{
          msg:'000'
      }
   },
   methods:{
       //登出
       logout(){
           sessionStorage.removeItem('username'); //登出時 刪除token
           this.$router.push('/login');      //导回登入页
       }
   },
   components:{
       
   }
}
</script>

<style scoped>
/* ------------------------------
   header区块
------------------------------ */
header{
  max-width:1026px;
  height:100px;
  margin:0 auto;
  overflow:hidden;
}
header .menuBtn {
    width:500px;
    margin-top:20px;
    float:right;
}
header .menuBtn a{
  display:inline-block;
  width:100px;
  height:40px;
  line-height:40px;
  font-size:14px;
  color:#fff;
  background-color:#666;
  text-align:center;
  text-decoration: none;
  border:1px solid #fff;
}
header .menuBtn a:hover{
  color:#fff;
  background-color:#000;
}
header .menuBtn a:last-child{
    border:1px solid #fff;
}

</style>