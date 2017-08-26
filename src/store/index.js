/**
 * Created by lrtwjhs on 2017/4/22.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'
import state from './rootState'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store
