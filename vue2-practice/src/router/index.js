import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from "../views/Home"
const routes = [
  // 重定向 当我访问 / 的时候 就跳到home页面
  // * 除了上面已经定义的路径
  {
    path: '*',
    redirect: {
      name: 'Home'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/login')
  },
  {
    path: '/Main',
    name: 'Main',
    component: () => import('../components/Main'),
    children: [{
        path: '/Home', //和父路径同级路径的孩子
        name: 'Home',
        component: Home

      },
      {
        path: '/My', //和父路径同级路径的孩子
        name: 'My',
        component: () => import('../views/My')
      },
      {
        path: '/Order',
        name: 'Order',
        component: () => import('@/views/Content/Order')
      },
      {
        path: '/Search',
        name: 'Search',
        component: () => import('@/views/Search')
      }
    ],
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/Content/Detail')
  },
  {
    path: '/Car',
    name: 'Car',
    component: () => import('@/views/Content/Car')
  },
  {
    path: '/Pay',
    name: 'Pay',
    component: () => import('@/views/Content/Pay')
  },
  {
    path: '/NewAddress',
    name: 'NewAddress',
    component: () => import('@/views/Content/NewAddress')
  },
  {
    path: '/Address',
    name: 'Address',
    component: () => import('@/views/Content/Address')
  }

]

const router = new VueRouter({
  routes
})

export default router