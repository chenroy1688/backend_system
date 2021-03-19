<template>
    <!-- single page 外层框架 -->
    <div class="total_wrap"> 
          <!-- content -->
          <keep-alive>
              <router-view></router-view>
          </keep-alive>
          <!-- 回到顶部 -->
          <!-- <router-view name="gototop"></router-view> -->
    </div>
</template>

<script>
//全局引入index.css
// import './assets/css/index.css'

export default {
  // name: 'app',
  data(){
    return{
    }
  },
  mounted(){
    console.log(process.env.VUE_APP_WEATHER_KEY)
  },
  methods:{

  }
}
</script>

<style>
.bis{
  border:2px solid #0000ff;
}
#app{
  font-family:"Lucida Grande",Helvetica,Arial,Verdana,sans-serif;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smooting:grayscale;
  text-align:center;
  color:#2c3e50;
}
/* 解决组件中 height:100% 不生效问题 */
html,body,#app{
  height:100%;
  margin:0;
  padding:0;
  overflow:hidden;
}
</style>
