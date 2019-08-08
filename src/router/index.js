import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FormCustomers from '@/components/FormCustomers'
import ListCustomers from '@/components/ListCustomers'
import ShopForm from '@/components/ShopForm'
import ShopList from '@/components/ShopList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      alias: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list-customers',
      name: 'ListCustomers',
      component: ListCustomers
    },
    {
      path: '/form-customers',
      name: 'FormCustomers',
      component: FormCustomers
    },
    {
      path: '/shop-form',
      name: 'ShopForm',
      component: ShopForm
    },
    {
      path: '/shop-list',
      name: 'ShopList',
      component: ShopList
    }

  ]
})