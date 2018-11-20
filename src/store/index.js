import Vue from 'vue'
import Vuex from 'vuex'
import cloneDeep from 'lodash/cloneDeep'
import common from './modules/common'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {//store 的子模块，内容相当于store的一个实例。common 和user 是两个子模块
    common,
    user
  },
  mutations: {
    // 重置vuex本地储存状态，也就是set和get中的set，这是vue 中唯一修改state的方式
    resetStore (state) {
      Object.keys(state).forEach((key) => {
        state[key] = cloneDeep(window.SITE_CONFIG['storeState'][key])
      })
    }
  },
  strict: process.env.NODE_ENV !== 'production'
})
