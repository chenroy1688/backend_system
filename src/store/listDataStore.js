// import axios from 'axios'

const listData = {
        namespaced:true, //注意 模块化管理数据请不要忘了命名空间的开启
        state:{
                count:'count的數據',
                msgs:'這是state的測試數據9876',
                List:[],
                compoentData:[],
                number:0
        },
        getters:{
                count:state => state.count
        },
        mutations:{
                ListData(state,payload){
                        state.List = payload.listDatas
                },
                handleAddState(state){
                        state.number++;
                }
        },
        actions:{
                getListData(context){
                        new Promise((resolve,reject) => {
                                axios.get('../../../static/listData.json').then((res)=>{
                                        context.commit('ListData',{'listDatas': res.data.listData})
                                })
                })
                },
                handleAdd(context){
                        context.commit("handleAddState")
                }
        }
}

export default listData