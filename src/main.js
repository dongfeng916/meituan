import Vue from 'vue'
import App from './App'
import './css/iconfont.css'
import './css/common.css'
import {openWin,redirectTo,backBeforeWin,Ajax} from './utils/common'
import store from './utils/store'


Vue.config.productionTip = false
App.mpType = 'app'

//把通用方法挂载到Vue原型上
Vue.prototype.$openWin = openWin
Vue.prototype.$redirectTo = redirectTo
Vue.prototype.$backBeforeWin = backBeforeWin
Vue.prototype.$ajax = Ajax
// 把store挂载到Vue原型上
Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()
