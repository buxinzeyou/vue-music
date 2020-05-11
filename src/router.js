import VueRouter from 'vue-router'

import home from './components/Home.vue'
import recommend from './components/tabbar/recommend.vue'
import hotsong from './components/tabbar/hotsong.vue'
import search from './components/tabbar/search.vue'
import playlist from './components/song/playlist.vue'
import song from './components/song/song.vue'

var router = new VueRouter({
  routes: [
    { path: '/', redirect: 'recommend'},
    { 
      path: '/home', 
      component: home,
      children: [
      // { path: '/', redirect: 'recommend'}, 
        { path: '/recommend', component: recommend},
        { path: '/hotsong', component: hotsong},
        { path: '/search', component: search},
        // { path: '/playlist/:id', component: playlist},
      ]
    },
    // { path: '/recommend', component: recommend},
    // { path: '/hotsong', component: hotsong},
    // { path: '/search', component: search},
    { path: '/playlist/:id', component: playlist},
    { path: '/song/:id', component: song}
  ],
  linkActiveClass: 'mui-active'
})

export default router