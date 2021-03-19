<template>
    <footer v-model="footInfo" :zip-code.sync="zipCode" :class="['foot',{'foot_bg':footerStyle.bg}]">
        <div class="light">{{ footInfo.info }}</div>
        <div class="hard">
            <div class="hard_info">
                <img src="../assets/image/foot_logo.jpg">
                <div class="m_menu">
                    <ul class="menu">
                        <li><a href="javascript:void(0)" class="line">首页</a></li>
                        <li><a href="javascript:void(0)" class="line">体育直播</a></li>
                        <li><a href="javascript:void(0)" class="line">赛事回放</a></li>
                    </ul>
                    <h2>联系方式</h2>
                    <p>合作邮箱：{{ footInfo.mail }}</p>
                    <p>QQ客服：{{ footInfo.QQ }}</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
   data(){
       return{
            footerStyle:{
                bg:true,
                txt:true
            },
            footInfo:{
                info:'Copyright@ 2019 测试页面 soniclive.cn  ALL Rights Reserved',
                areaCode:'+86',
                mail:"3217324595@qq.com",
                QQ:'3217324595'
            },
            zipCode:"最多测试页面测试页面"
       }
   }
}
</script>

<style scoped>
/* ------------------------------
        footer 底部区块
------------------------------ */
.foot_bg{
    background-color:#dadada;
}
footer .m_menu{
  height:55px;
}
.m_menu ul.menu{
  width:482px;
  float:right;
  box-sizing:border-box;
}
.m_menu ul.menu li{
  position:relative;
  display:block;
  float:left;
  width:120px;
  height:30px;
  margin-bottom:20px;
  border-left:1px solid #fff;
  transition: all 0.5s ease-out;
  z-index:999;
}
.m_menu ul.menu li a{
  line-height:30px;
  text-decoration: none;
  color:#fff;
  transition:all 0.5s;
}
.m_menu ul.menu li a:hover{
  color:#ff2973;
}

footer{
  width:100%;
  text-align:center;
  
}
footer div.light{
  width:460px;
  font-size:16px;
  line-height:16px;
  color:#4f4e4e;
  padding:20px 0;
  margin:0 auto;
}
footer div.hard{
  width:100%;
  color:#fff;
  background-color:#595858;
}
div.hard .hard_info{
  width:980px;
  padding:40px 0;
  margin:0 auto;
  overflow:hidden;
}
.hard_info img{
  width:125px;
  height:155px;
  margin-left:30px;
  float:left;
}
.hard_info .m_menu{
  width:380px;
  float:right;
}
.hard_info .m_menu .menu{
  width:380px;
}
.hard_info h2,
.hard_info p{
  font-size:14px;
  text-align:left;
  padding:10px 0;
  border-bottom:1px solid #929292;
}
.hard_info h2{
  position:relative;
  margin:30px 0 0 0;
  padding-left:30px;
}
.hard_info h2::before{
  content:'☛';
  position:absolute;
  bottom:5px;
  left:0;
  font-size:24px;
  color:#fff;
}
</style>