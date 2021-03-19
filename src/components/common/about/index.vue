<template>
  <div class="pc_wrap">
      <div id="demo" class="content row mb-5">
          <!-- 主标题 -->
            <el-row>
                <el-col :span="24" class="contnet_main_topic">
                    <span>关于我们</span>
                </el-col>
            </el-row>

            <!-- 左側 选单区 -->
            <div class="col-3" style="margin-top:25px;">
                <div class="contact_top">｜ 选单列表 ｜</div>
                <!-- 島航 -->
                <div class="list-group mb-5">
                    <router-link tag='li' class="nav-link" :to="{ name:'contactLink' }">
                        <a class="list-group-item">+  关于我们</a>
                    </router-link>
                </div>
                <div class="list-group mb-5">
                    <router-link tag="li" class="nav-link" :to="{name:'historyLink'}">
                        <a class="list-group-item">+ 免责声明</a>
                    </router-link>
                </div>
                <div class="list-group mb-5">
                    <router-link tag="li" class="nav-link" :to="{name:'deliveryLink'}">
                        <a class="list-group-item">+ 隐私政策</a>
                    </router-link>
                </div>
            </div>

            <!-- 右侧 content -->
            <div class="col-7">
                <router-view></router-view>
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
        userH: '音速直播网站',
        show:true
    }
  },
  methods: {
    
  }
};
</script>

<style scoped>
.bos{
    border:1px solid #ff0000;
}
.col-3{
    float: left;
    width:25%;
}
.col-7{
    float: right;
    width:75%;
    padding:25px;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
    opacity: 0;
}

/* 产品展示 -- 左侧选单 */
.list-group-item{
    display:block;
    height: 50px;
    color:#666;
    text-align:center;
    line-height:50px;
    background-color:#ebe8e8;
    border:1px solid #cdcbcb;
}
.list-group-item:hover{
    background-color:#bab8b8;
    color:#fff;
}
</style>