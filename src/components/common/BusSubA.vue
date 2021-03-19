<template>
    <!-- back to top -->
    <div class="comA">
       <!-- bus测试 -->
        <p>
            > 在BusSubA組件,接收bus的數據push進數組
        </p>
        <div class="comA-num">
            <p>{{ numbers }}</p>
            <p>{{ person.name }}</p>
        </div>
        <el-button type="primary" @click="pushArr">增加數字</el-button>
        <div>
            <input type="text" name="username" v-model="person.name" v-focus/>
        </div>
        <div class="box">
            <p class="ellipsis">
                Astral Web是一群對網路充滿熱情的團隊，我們相信網路的力量無遠弗屆，
                人人都有機會開創網路事業。一邊享受網路事業帶來的樂趣，一邊秉持著工作即是玩樂的精神，
                不斷激發各種靈感為客戶提高收益，提供最完善的服務。
            </p>
        </div>
    </div>
</template>

<script>
//引入bus实体
import { bus } from '../../bus.js'
//導入vuex
import store from '../../store/index.js' //直接導入store
import{ mapState, mapMutations, mapActions } from 'vuex'
 
export default {
   data(){
       return{
            numbers:[1,2,3,5],
            storeState:store.state.selectTab,
            person:{
                name:'danny',
                age:22
            },
            arr:[1,3,5,7,9]
       }
   },
   created(){
       this.handleAddNum()
   },
   computed:{
       ...mapState(['Nums','msg'])
   },
   mounted(){

   },
   methods:{
       handleAddNum(){
           //接收bus实体传入payload数据
           bus.$on('addNum',(payload) => {
               this.numbers.push(payload)
           })
       },
       addNums(){
           store.addNum(this.numbers)
       },
       pushArr(){
           this.arr.push(99)
       }
   },
   watch:{
       //監聽 person物件的name值
       "person.name":function(newVal,oldVal){
           console.log(newVal,oldVal)
       },
       //監聽數組長度
       "arr.length":function(newVal,oldVal){
           console.log(newVal,oldVal)
       },
       firstName:{
           handler(val,oldVal){

           },
           immediate:true,
           deep:true
       }
   },
   directives:{ //自訂指令
        focus:{
            inserted(el){
                el.focus()
            }
        }
   }
}
</script>

<style>
/* ------------------------------
        goto top 
------------------------------ */
.box {
    width: 300px;
    padding: 10px;
    border: #ef5c28 1px solid;
}
/* 
文字的區塊使用 text-overflow: ellipsis;
注意：在使用text-overflow: ellipsis; 時，需要一併設定 white-space: nowrap; 
text-overflow: ellipsis; 才會有效果。
*/
.ellipsis{
    overflow: hidden;
    text-overflow: ellipsis; /* 步斷行 */
    white-space: nowrap;
}
</style>