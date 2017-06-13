// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

<<<<<<< HEAD
import echarts from 'echarts'

// Vue.prototype.$echarts = echarts 

import Rightyjkb from './components/pages/ct-rt/Rightyjkb.vue'
import Rightyyfx from './components/pages/ct-rt/Rightyyfx.vue'
import Rightjzyx from './components/pages/ct-rt/Rightjzyx.vue'
import Rightyjts from './components/pages/ct-rt/Rightyjts.vue'
import Rightjszy from './components/pages/ct-rt/Rightjszy.vue'
import Rightxxcxjwh from './components/pages/ct-rt/Rightxxcxjwh.vue'
import Rightzwpg from './components/pages/ct-rt/Rightzwpg.vue'
import Rightxtgl from './components/pages/ct-rt/Rightxtgl.vue'



import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/yjkb', component: Rightyjkb },
  { path: '/yyfx', component: Rightyyfx },
  { path: '/jzyx', component: Rightjzyx },
  { path: '/yjts', component: Rightyjts },
  { path: '/jszy', component: Rightjszy },
  { path: '/xxcxjwh', component: Rightxxcxjwh },
  { path: '/zwpg', component: Rightzwpg },
  { path: '/xtgl', component: Rightxtgl },
  { path: '*', redirect: '/yjkb' }
];

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

=======
>>>>>>> 3e75aee5d835678a36f4fa0e29e4d2c6eae37be2
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
<<<<<<< HEAD
  router,
=======
>>>>>>> 3e75aee5d835678a36f4fa0e29e4d2c6eae37be2
  template: '<App/>',
  components: { App }
})
