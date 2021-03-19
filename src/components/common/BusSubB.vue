<template>
    <div class="comA">
        <!-- bus测试 -->
            <p>
                > 在BusSubB 組件點擊Add number時要觸發一個自訂事件 <br>
                > 將該事件傳遞給eventbus，同時夾帶當時的數字(payload) <br>
                > 在BusSubB 組件利用eventbus監聽該自訂事件，若事件觸發則將傳來的數字推進原本的numbers陣列
            </p>
            <div class="comA-num">
                <label for="number"></label>
                <input
                    type="text"
                    name="number"
                    placeholder="输入依个号码"
                    v-model="number"
                    class="busInput"
                />
                <button @click="addNum">增加号码</button>
            </div>
    </div>
</template>

<script>
//引入bus实体
import { bus } from '../../bus.js'

export default {
   data(){
       return{
            number:0
       }
   },
   mounted(){
       
   },
   methods:{
       //在BusSubB 組件點擊Add number時要觸發一個自訂事件
        //將該事件傳遞給eventbus，同時夾帶當時的數字(payload)
        //在BusSubB 組件利用eventbus監聽該自訂事件，若事件觸發則將傳來的數字推進原本的numbers陣列
       addNum(){ //传递给bus实体
           bus.$emit('addNum',parseInt(this.number))
       }
   }
}
</script>

<style>
/* ------------------------------
        goto top 
------------------------------ */
.busInput{
    padding:10px;
    margin-right:20px;
}
</style>