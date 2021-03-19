<template>
  <!-- 用户列表 -->
  <div class="pc_wrap">
      <!-- 主标题 -->
      <el-row>
          <el-col :span="24" class="contnet_main_topic">
              <span>问题询问</span>
          </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portTxt: "main內容區",
    };
  },
  created() { //尚未载入dmo时 接入api数据
    // this.$http.get("https://jsonplaceholder.typicode.com/users")
    //   .then(response => {
    //     this.userData = response.data
    //   })
    //   .catch(response => {
    //     console.log("error");
    //   });
  }
};
</script>

<style scoped>

</style>