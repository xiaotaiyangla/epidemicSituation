import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 引入请求
import axios from 'axios'
window.axios = axios

import { Ajax } from "../config/request"

Vue.config.productionTip = false
Vue.prototype.httpRequest = Ajax.httpRequest
Vue.prototype.toClickRequest = Ajax.toClickRequest

// 引入公共样式
import "../static/common.css";

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')