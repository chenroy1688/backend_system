<template>
  <div class="pc_wrap">
      <!-- 主标题 -->
      <el-row>
          <el-col :span="24" class="contnet_main_topic">
              <span>用戶列表</span>
          </el-col>
      </el-row>
      <div class="bos">
          {{ count }} +++ {{msgs}} === {{ content }}
      </div>
      <!-- 三組件 切換 -->
      <el-row>
          <el-col :span="24">
                <div class="title_btn">
                    <a @click="tabToggle(tab1)" :class="{active : tab1 == currentView}">赛事直播</a>
                    <a @click="tabToggle(tab2)" :class="{active : tab2 == currentView}">视频回放</a>
                    <a @click="tabToggle(tab3)" :class="{active : tab3 == currentView}">独家新闻</a>
                </div>
                <!-- 元件內容 -->
                <div class="tabs">
                    <component :is='currentView' keep-alive></component>
                </div>
          </el-col>
      </el-row>
      <!-- EventBus組件 -->
      <el-row>
          <el-col :span="24" class="bus-wrap">
              <busSubA></busSubA>
              <busSubB></busSubB>
          </el-col>
      </el-row>
  </div>
</template>

<script>
import comA from './componentA.vue'
import comB from './componentB.vue'
import comC from './componentC.vue'
//EventBus組件 應用
import busSubA from './BusSubA.vue'
import busSubB from './BusSubB.vue'

//引入封装api接口
import { gettableDataApi } from '@/api/api'
//導入vuex
import{ mapState, mapGetters, mapMutations, mapActions } from 'vuex'
//引用mock 模擬api數據
import Mock from '../../mock'

export default {
  components:{
    comA,
    comB,
    comC,
    busSubA,
    busSubB
  },
  data() {
    return {
          tab1: 'comA', 
          tab2: 'comB', 
          tab3: 'comC', 
          currentView: 'comA' //正確點擊
    }
  },
  created(){
      //在页面加载时读取localStorage里的状态信息
      if(localStorage.getItem('store')){
          this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(localStorage.getItem('store'))))
      }

      //在页面刷新时将vuex里的信息保存到localStorage里
      //瀏覽器關閉or刷新時 觸發beforeunload事件
      window.addEventListener('beforeunload',() => {
          localStorage.setItem('store',JSON.stringify(this.$store.state))
      })

      //this.$store.replaceState()  用于替换 store 的信息（状态合并）。
      //Object.assign(target, ...source)  将source的值 赋给 target，若有重复的数据，则覆盖。其中...表示可以多个source。
  },
  mounted(){
      this.getTableData()
      this.getUser()
  },
  computed:{
    ...mapState('listData',['count','msgs']),
    ...mapGetters('homeData',['content','selectTab'])
  },
  methods: {
    ...mapActions('listData',['getListData','handleAdd']), //方法一
    //方法二
    //  ...mapActions({            
    //     getListData:"listData/getListData",            
    //     handleAdd:"listData/handleAdd"        
    // }),

    //獲取json數據 api
    getTableData(){
        gettableDataApi()
          .then(res => {
            this.tableList = res.data
          })
    },
    getUser(){ //調用mock模擬的數據
      this.$http.get('/api/paginationData')
        .then(res => {
            if(res){
                console.log(res.data)
            }
        }).catch(res => {
            alert(res)
        })
    },
    //切換不同元件內容
    tabToggle (tabText) { 
        this.currentView = tabText 
    } 
  }
};
</script>

<style scoped>
button{
    padding:10px;
    font-size:14px;
    color:#fff;
    background:black;
    border-style:none;
    cursor:pointer;
    margin:5px 0;
}

.title_btn{
  padding:0;
  font-size:14px;
}
.title_btn a{
  font-size:18px;
  color:#999;
  padding:20px;
  border:1px solid #d4d4d4;
  cursor: pointer;
}
.title_btn a:hover{
  color:#fff;
  background-color:#333;
}
/* 選取中 */
.title_btn a.active{ 
  color:#fff;
  background-color:#999;
}

.bus-wrap{
  display:flex;
  justify-content: space-between;
}
.bus-wrap .comA{
  flex:1 2 50%;
}

</style>