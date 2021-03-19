export default{
    // addNumber({commit},number){
    //     commit('adddNums',number)
    // }
    
    //购买会员方案功能
    // buyVip({commit},val){
    //     //非同步 actions -> 调用mutations -> state
    //     return new Promise(( resolve,reject ) => {
    //         //mock api 交互
    //         setTimeout(() =>{
    //             //修改本地state
    //             commit('setMemberInfo',{
    //                 userStatus : val.userStatus,
    //                 vipLevel   : val.vipLevel
    //             })
    //             //commit执行mutations 成功后抛出成功提示
    //             resolve('您已购买成功')
    //         },1000)
    //     })
    // },
    //后端交互 -- 普通会员分享赠送vip会员
    // getFreevip({commit,state}){
    //     //mock api 交互
    //     return new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             //判断是否为普通会员 (是 -> 赠送高级vip会员) 
    //             if(state.userStatus === 0){
    //                 commit('setMemberInfo',{
    //                     userStatus : 2,
    //                     vipLevel   : 3
    //                 })
    //                 //commit执行mutations 成功后抛出成功提示
    //                 resolve('已分享,已赠送您一个月高级vip会员!!')
    //             }else{
    //                 alert('已經分享');
    //             }
    //         },1000)
    //     })
    // }
}