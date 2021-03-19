<template>
  <!-- 登入後首頁 -->
  <div class="pc_wrap">
      <!-- 輪播圖片 :interval輪播秒數 -->
      <el-carousel :interval="4000" type="card" height="344px">
          <el-carousel-item v-for="(pics,index) in picItems" :key="index">
              <img :src="pics"/>
          </el-carousel-item>
      </el-carousel>
      
      <!-- echarts圖表 :type傳入類型參數 -- bar 樹狀圖 line 折線圖 -->
      <charts :type="'bar'"/>
      <charts :type="'line'"/>

      <div ref="childDiv">
          <childs ref="getCount"/>
      </div>

      <el-button type="primary" @click="show">取得子組件寬高</el-button>
      <el-button type="primary" @click="getOne">取得子組件數量</el-button>
  </div>
</template>

<script>
//引入charts組件
import charts from './charts.vue'
import childs from './content.vue'

export default {
  components:{
    charts,
    childs
  },
  name:'chart',
  data() {
    return {
      picItems:[ //大圖輪播
          require('@/assets/image/banner01.jpg'),
          require('@/assets/image/banner02.jpg'),
          require('@/assets/image/banner03.jpg'),
          require('@/assets/image/banner04.jpg')
      ]
    };
  },
  created() { //尚未载入dmo
    
  },
  methods:{
    show(){
        console.log (this.$refs.childDiv.clientWidth,this.$refs.childDiv.clientHeight,this.$refs.childDiv.innerText);
    },
    getOne(){
        console.log(this.$refs.getCount.count,this.$refs.getCount.msg)
    }
  }
};
</script>

<style scoped>
/* ------------------------------
      輪播圖片 区块
------------------------------ */

</style>