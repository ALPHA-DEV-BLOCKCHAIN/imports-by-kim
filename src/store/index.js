//import Vuex from 'vuex'
//export default new Vuex.Store({
//state: {},
//getters: {},
//actions: {},
//mutations: {},
//modules:{
//}
//})

import Vuex from 'vuex'
// add this
import products from './modules/product';
import cart from './modules/Cart';
export default new Vuex.Store({
state: {},
getters: {},
actions: {},
mutations: {},
modules:{
// add this
products,
cart
}
})
