// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'view-design'
import 'view-design/dist/styles/iview.css'
import i18n from '@/locale'
import config from '@/config'
import './index.less'
import '@/assets/icons/iconfont.css'
/* eslint-disable */
// if (process.env.NODE_ENV !== 'production') require('@/mock')
require('@/mock')
Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.config.productionTip = false // 生产环境关掉提示
Vue.prototype.$config = config // 全局注册应用配置

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
})