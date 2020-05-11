import Vue from 'vue'

import vueRouter from 'vue-router'
Vue.use(vueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)



import LyricScroll from 'vue-lyric-scroll'
Vue.use(LyricScroll)



Vue.http.options.root = 'http://musicapi.leanapp.cn/'
Vue.http.options.emulateJSON = true

import moment from 'moment'
Vue.filter('dateFormat', function (dataStr,pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

// import { Header, Swipe, SwipeItem, Button, Lazyload   } from 'mint-ui';
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import VuePreview from 'vue-preview'
Vue.use(VuePreview)


import router from './router.js'
import app from './App.vue'
var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router,
  
})
