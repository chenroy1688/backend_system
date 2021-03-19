// import axios from 'axios'

const homeData = {
        namespaced:true, //注意 模块化管理数据请不要忘了命名空间的开启
        state:{
                List:[],
                Txt:'丁丁式個人才1200',
                Nums:[4,5,6,7,8],
                selectTab:1099,
                arr:[],
                objj:{
                    'name':'roy',
                    'age':25
                },
                addNums(newNum){
                    return this.state.Nums.push(parseInt(newNum))
                }
        },
        actions:{
                addNumber({commit},number){
                        commit('adddNums',number)
                    }
        },
        mutations:{
                adddNums(state,payload){
                        state.Nums.push(payload)
                }
        },
        getters:{
                content: state => state.Txt,
                selectTab : state => state.selectTab
        }
}

export default homeData