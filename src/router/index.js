import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Cate from '../components/Cate'
import Film from '../components/Film'
import Hotel from '../components/Hotel'
import Leisure from '../components/Leisure'
import Service from '../components/Service'
import TakeOut from '../components/TakeOut'
import Travel from '../components/Travel'
import Beauty from '../components/Beauty'
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
