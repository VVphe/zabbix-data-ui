import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import cart from './modules/cart'
import products from './modules/products'
import itemdata from './modules/itemdata'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  modules: {
    cart,
    products,
    itemdata
  },
  strict: true,
})


