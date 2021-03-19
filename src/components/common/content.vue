<template>
    <!-- right 直播列表 -->
				<div class="right_content bos">
                  child
                  <el-button type="success" @click="getOne">取得技數器</el-button>
				</div>
</template>

<script>
export default {
  	data(){
       return{
          count:0,
          msg:'子組件文字內容'
       }
   },
   methods:{
	   getOne(){
         this.count++
      }
   },
   mounted(){

   }
}
</script>

<style scoped>
.right_content{
   height:150px;
}
.bos{
  border:1px solid #999;
}
</style>