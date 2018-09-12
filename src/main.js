import Vue from 'vue'
import App from './App'
import './css/iconfont.css'
import './css/common.css'
import {openWin,redirectTo,backBeforeWin} from './utils/common'


Vue.config.productionTip = false
App.mpType = 'app'

//把通用方法挂载到Vue原型上
Vue.prototype.$openWin = openWin
Vue.prototype.$redirectTo = redirectTo
Vue.prototype.$backBeforeWin = backBeforeWin

const app = new Vue(App)
app.$mount()
