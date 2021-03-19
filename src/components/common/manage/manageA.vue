<template>
  <!-- 用户列表  實做計算機 -->
  <div class="pc_wrap">
      <!-- 主标题 -->
      <el-row>
          <el-col :span="24" class="contnet_main_topic">
              <span>网站地图</span>
          </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
            <!--
              1.點擊每個數字時需要顯示在上方的input box裡面，我們需要一個變數紀錄目前顯示的數字
              2.點擊每個運算子時要有個變數去紀錄目前點了哪一個運算子
              3.如果已經點擊了運算子，後續再點擊數字時，輸入框應該要清空讓新的數字可以輸入，為此我們需要一個變數紀錄之前的數字。
              4.點擊等號時要計算目前的數字與上一次顯示的數字的運算結果
             -->
            <div class="flexbox">
                <div class="calculator">
                    <input class="display" v-model="current"></input>

                    <div class="btn dark" @click="clear">C</div>
                    <div class="btn dark">+/-</div>
                    <div class="btn dark">%</div>
                    <div class="btn operator" @click="division">/</div>
                    
                    <div class="btn" @click="append('7')">7</div>
                    <div class="btn" @click="append('8')">8</div>
                    <div class="btn" @click="append('9')">9</div>
                    <div class="btn operator" @click="multiply">x</div>
                    <div class="btn" @click="append('4')">4</div>
                    <div class="btn" @click="append('5')">5</div>
                    <div class="btn" @click="append('6')">6</div>
                    <div class="btn operator" @click="reduce">-</div>
                    <div class="btn" @click="append('1')">1</div>
                    <div class="btn" @click="append('2')">2</div>
                    <div class="btn" @click="append('3')">3</div>
                    <div class="btn operator" @click="plus">+</div>
                    <div class="btn zero" @click="append('0')">0</div>
                    <div class="btn">.</div>
                    <div class="btn operator" @click="equal">=</div>
                </div>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name:'Calculator', //計算機demo
  data() {
    return {
      current:0, //目前輸入的數值
      previous:'', //用來儲存之前的顯示結果
      operator:null, //用來儲存目前點選了哪個運算子(將以函數的方式儲存)
      operatorClicked:false, //用來檢查使用者是否有點擊過任何一個運算子

      testPlus:'',
      testValue:'this',
      testTwo:'addd'
    }; 
  },
  created() { //尚未载入dmo时 接入api数据
 
  },
  mounted(){
    
  },
  computed:{
  
   },
  methods:{
    //為0-9增加綁定事件
    append( num ){
        // 如果已點選任何運算子，則清空目前的值
        if(this.operatorClicked) this.current = ''

        // 重置operatorClicked的值，讓第二個數字也能正常輸入
        this.operatorClicked = false 
        //檢查是否為0(不能是0512),如果不是就與current + num 連接
        this.current = this.current === 0 ? `${ num }` : `${ this.current }${ num }`
    },
    plus(){ // +
      //傳入運算函數
      this.operator = (a,b) => a + b
      this.testPlus = (b,c) => b + c
      let obj = this.test()

      console.log('objjjjjjjj',obj)

      // 呼叫設定setPrevious的函數
      this.setPrevious()
    },
    reduce(){ // -
      //傳入運算函數
      this.operator = (a,b) => a - b
      this.testPlus = (b,c) => b + c
      // 呼叫設定setPrevious的函數
      this.setPrevious()
    },
    multiply(){ // *
      //傳入運算函數
      this.operator = (a,b) => a * b
      this.testPlus = (b,c) => b + c
      // 呼叫設定setPrevious的函數
      this.setPrevious()
    },
    division(){ // 除法
      //傳入運算函數
      this.operator = (a,b) => a / b
      this.testPlus = (b,c) => b + c
      // 呼叫設定setPrevious的函數
      this.setPrevious()
    },
    clear(){
      this.current = 0
    },
    test(){
      let value = 100
      return value
    },
    equal(){ // =
      console.log(this.current,this.previous)
      console.log(this.testTwo,this.testValue,this.testPlus)

      this.testTwo = `${this.testPlus(
        this.testValue,this.testTwo
      )}`

      this.current = `${this.operator(
        parseFloat(this.previous),
        parseFloat(this.current)
      )}`

      this.operator = null
      this.operatorClicked = false
    },
    setPrevious(){
      console.log('執行函式!!')
      // 將目前的值存在previous(按下個數字前要清空目前的current)
      this.previous = this.current

      // 表示使用者確實按下任何一個運算子
      this.operatorClicked = true
    }
  }
};
</script>

<style scoped>

</style>