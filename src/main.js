import Vue from 'vue'
import App from './App'
import '../static/styles/index.css'
import 'iview-mpvue/dist/components/modal/style/css'
import 'iview-mpvue/dist/components/icon/style/css'
import 'iview-mpvue/dist/components/avatar/style/css'
import 'iview-mpvue/dist/components/cell/style/css'
import 'iview-mpvue/dist/components/cell-group/style/css'
import 'iview-mpvue/dist/components/card/style/css'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
