(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-438772ac"],{"10e1c":function(e,r,s){},"578a":function(e,r,s){"use strict";s.r(r);var t=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"login-wrap"},[s("div",{staticClass:"login-content"},[s("div",{staticClass:"login-main"},[s("h2",{staticClass:"login-main-title"},[e._v("管理员登陆")]),s("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.login()}}},[s("el-form-item",{attrs:{label:"用户名",prop:"username"}},[s("el-input",{attrs:{placeholder:"帐号"},model:{value:e.ruleForm.username,callback:function(r){e.$set(e.ruleForm,"username",r)},expression:"ruleForm.username"}})],1),s("el-form-item",{attrs:{label:"密码",prop:"password"}},[s("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.ruleForm.password,callback:function(r){e.$set(e.ruleForm,"password",r)},expression:"ruleForm.password"}})],1),s("el-form-item",[s("el-button",{staticClass:"login-btn-submit",attrs:{type:"primary"},on:{click:function(r){return e.login()}}},[e._v("立即登陆")])],1)],1)],1)])])},n=[],a={data:function(){return{isLogin:!0,nameText:"音速直播管理后台登入 / LOGIN",ruleForm:{username:"admin",password:"0000"},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:4,max:10,message:"长度在 4 到 10 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:4,max:8,message:"长度在 4 到 8 个字符",trigger:"blur"}]}}},methods:{login:function(){var e=this.ruleForm,r=e.username,s=e.password;"admin"==r&&"0000"==s?(sessionStorage.setItem("username",r),this.$router.push("/Home")):alert("账号或密码输入错误!!")},login2:function(){var e=this.ruleForm,r=e.username,s=e.password;this.$http({method:"/post",url:"/get_login",data:{user:r,password:s}}).then(function(e){console.log(e)})}}},o=a,l=(s("d433"),s("2877")),i=Object(l["a"])(o,t,n,!1,null,"037c74f4",null);r["default"]=i.exports},d433:function(e,r,s){"use strict";var t=s("10e1c"),n=s.n(t);n.a}}]);
//# sourceMappingURL=chunk-438772ac.7c69da8d.js.map