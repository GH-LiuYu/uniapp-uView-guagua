import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局uView
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

const app = new Vue({
    ...App
})
app.$mount()
