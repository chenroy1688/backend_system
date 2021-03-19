import Vue from 'vue' //引入vue
import Vuex from 'vuex' //引入vuex

// import state from './state'
// import getters from './getters'
// import mutations from './mutations'
// import actions from './actions'

import homeData from './homeDataStore'
import listData from './listDataStore'

Vue.use(Vuex)

const store = new Vuex.Store({
        // state,
        // getters,
        // mutations,
        // actions,
        modules:{
            homeData,
            listData
        }
        
})

export default store