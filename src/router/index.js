import Vue from 'vue'
import Router from 'vue-router'
//这是首页路由
import Home from '../components/Home'
import Cate from '../components/Cate'
import Film from '../components/Film'
import Hotel from '../components/Hotel'
import Leisure from '../components/Leisure'
import Service from '../components/Service'
import TakeOut from '../components/TakeOut'
import Travel from '../components/Travel'
import Beauty from '../components/Beauty'
//这是电影页面的路由
import FilmHome from '../constructor/FilemHome.vue'



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/cate',
      component: Cate,
    },
    {
      path: '/film',
      component: Film,
      children : [
        {
          path : '/film/home',
          component : FilmHome
        }
      ]
    },
    {
      path: '/hotel',
      component: Hotel,
    },
    {
      path : '/beauty',
      component : Beauty
    },
    {
      path: '/leisure',
      component: Leisure,
    },
    {
      path: '/service',
      component: Service,
    },
    {
      path: '/takeOut',
      component: TakeOut,
    },
    {
      path: '/travel',
      component: Travel,
    },
    {
      path : '*',
      redirect : {path : '/home'},
    }
  ]
})
