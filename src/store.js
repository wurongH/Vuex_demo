import Vue from 'vue'
import Vuex from 'vuex'
import { timeout } from 'q';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 3,
  },
  mutations: {
    add(state) {
      state.count++
    },
    addN(state, n) {
      state.count +=n
    },
    dec(state) {
      state.count--
    },
  },
  //  action用于处理异步任务  action还是要通过触发mutation的方式间接更改数据
  actions: {
    addAsync(val) {
      setTimeout( () => {
        val.commit('add')
      }, 1000) 
    }
  },
  getters: {
    showNum: state => {
      return '当前最新数量是【' + state.count + '】'
    }
  }
})
