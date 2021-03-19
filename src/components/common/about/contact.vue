<template>
  <!-- product/連繫我們 -->
    <div class="card text-dark bg-light mb-3 contact_wrap pc_wrap">
         <div class="card-body">
            <h1>联系资讯 / contact info</h1>
            <div class="card-text">
                  <div class="third_info">合作邮箱 ： 3217324595＠qq.com ｜ QQ客服 ： 3217324595</div>
                  <!-- 三級路由 -->
                  <div class="third_wrap">
                     <div class="third_btn">
                        <router-link :to="{name:'phomeNumber'}">电话資訊</router-link>
                        <router-link :to="{name:'personName'}">合作聲明</router-link>
                     </div>
                     <router-view></router-view>
                  </div>
            </div>
         </div>
   </div>
</template>

<script>

export default {
  components:{
      
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  }
};
</script>

<style scoped>
   .mail_info{
      font-size:14px;
      background-color:#e2dfdf;
   }
   .card-text div{
      font-size:14px;
      padding:20px;
   }
</style>