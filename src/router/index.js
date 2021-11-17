import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login'
import Home from '@/page/homePage'
import Register from '@/page/register'
import Findpassword from '@/page/findpassword'
import CreateItem from '@/page/createItem'
import gerenzhuye from '@/page/gerenzhuye'
import detail from '@/page/goodDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component : Home,
    },
    {
      path:'/login',
      name:'Login',
      component: Login,
    },
	{
		path: '/register',
		name: 'Register',
		component: Register,
	},
	{
		path: '/findpassword',
		name: 'Findpassword',
		component: Findpassword,
	},
  {
    path: '/createItem',
    name: 'CreateItem',
    component: CreateItem,
  },
  {
    path: '/gerenzhuye',
    name: 'Gerenzhuye',
    component: gerenzhuye,
  },
  {
    path: '/goodDetail',
    name: 'GoodDetail',
    component: detail,
  },
  ]
})
