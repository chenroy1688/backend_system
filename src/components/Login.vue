<template>
    <!-- 登陆表单 -->
    <div class="login-wrap">
        <div class="login-content">
            <div class="login-main">
                <h2 class="login-main-title">管理员登陆</h2>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" @keyup.enter.native="login()">
                    <!-- 帐号 栏位 -->
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="ruleForm.username" placeholder="帐号"></el-input>
                    </el-form-item>
                    <!-- 密码 栏位 -->
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="ruleForm.password" placeholder="密码"></el-input>
                    </el-form-item>
                    <!-- 登入按钮 -->
                    <el-form-item>
                        <el-button type="primary" class="login-btn-submit" @click="login()">立即登陆</el-button>
                        <!-- <el-button @click="login('ruleForm')">重置</el-button> -->
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   data(){
      return{
        isLogin: true,
        nameText: '音速直播管理后台登入 / LOGIN',
        //账号密码
        ruleForm: {
            username: 'admin',
            password:'0000'
        },
        rules: { //登入校验
            username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 4, max: 10, message: '长度在 4 到 10 个字符', trigger: 'blur' }
                ],
            password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 4, max: 8, message: '长度在 4 到 8 个字符', trigger: 'blur' }
                ],
            }
      }
   },
   methods:{
       login(){
           //获取登入账号密码 模擬
           let {username,password} = this.ruleForm
        
           if(username == 'admin' && password == '0000'){
               //缓存token
               sessionStorage.setItem('username',username)
               //跳转至home.vue
               this.$router.push('/Home');
           }else{
               alert('账号或密码输入错误!!');
           }
       },
       //傳給後端 傳入登入相關數據 ex:假設後端請求api的地址為 - http://127.0.0.1:8080/get_login api文件由後端定義
        login2(){
            let {username,password} = this.ruleForm

            this.$http({
                method:'/post',
                url:'/get_login',
                data:{ //發送user及password請求  為後端需要的val
                    user:username,
                    password:password
                }
            }).then(res => { //請求成功 res後端返回請求的數據
                console.log(res)
                //後端接受請求數據後傳回 code:200 或 405 成功失敗辨識碼, msg 錯誤訊息

                // let (code,msg) = res.data
                // if(code == '200'){
                //     sessionStorage.setItem('username',name)
                //     this.$route.push('/Home')
                // }else{
                //     alert(msg)
                // }
            })
        }


       
    //    submitForm(formName) {
    //     this.$refs[formName].validate((valid) => {
    //       if (valid) {
    //         alert('submit!');
    //       } else {
    //         console.log('error submit!!');
    //         return false;
    //       }
    //     });
    //   },
    //   resetForm(formName) {
    //     this.$refs[formName].resetFields();
    //   }

        //login登入 判断
        //登入成功，配发 token 給 user 保存 /  各路由间 user 的 token，失败就重新导向登入页面 token
        //token 无误不影响 routing  /  登出时删除 token
    //    login(){
    //        if(this.userName === 'aaaa' && this.password === '9999'){
    //            localStorage.setItem('token','ImLogin') //登入存token
    //            this.$router.push('/') //导向首页
    //        }else{
    //            alert('帐号或密码错误!!请重新输入！');
    //        }
    //    }
   }
}
</script>

<style scoped>
    .login-wrap{
        width:700px;
        margin:0 auto;
    }
    .login-content{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        height: 300px;
        width: 400px;
        background-color: #112234;
        opacity: .8;
    }
    .login-main{
        color: beige;
        padding: 20px 20px 10px 20px;
    }
    .login-main-title{
        font-size:16px;
        font-weight:600;
        color:#0774f5;
    }
    .login{
        position:relative;
        width:400px;
        font-size:16px;
        padding:25px;
        margin:10% auto;
        background-color:#fff;
        border:1px solid #333;
        -webkit-box-shadow: 3px 3px 10px #666;
        -moz-box-shadow: 3px 3px 10px #666;
        box-shadow: 3px 3px 10px #666;
        /* transform:translate(-50%,-50%); */
    }
    .loginInput{
        width:260px;
        margin:15px auto;
    }
    .loginInput input{
        font-size:14px;
        color:#d84555;
        padding:10px;
        margin:10px;
    }
    button{
        width:100%;
        padding:10px;
        color:#fff;
        text-align:center;
        background-color:#000;
        border-style:none;
    }
    
    .login_text{
        text-align:center;
        font-size:16px;
        padding:15px 0;
        color:#fff;
        background-color:#d84555;
    }
</style>