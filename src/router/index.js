import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '法律咨询', icon: 'form' }
      }
    ]
  },
  {
    path: '/list',
    component: Layout,
    redirect: '/list/land',
    name: 'List',
    meta: { title: '资讯列表', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'land',
        name: 'Land',
        component: () => import('@/views/land/index'),
        meta: { title: '土地房屋法律咨询', icon: 'table' }
      },
      {
        path: 'marriage',
        name: 'Marriage',
        component: () => import('@/views/marriage/index'),
        meta: { title: '婚姻法律咨询', icon: 'tree' }
      },
      {
        path: 'work',
        name: 'Work',
        component: () => import('@/views/work/index'),
        meta: { title: '劳动及债务咨询', icon: 'table' }
      },
      {
        path: 'else',
        name: 'Else',
        component: () => import('@/views/else/index'),
        meta: { title: '其他法律咨询', icon: 'tree' }
      }
    ]
  },

  {
    path: '/lawer',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Lawer',
        component: () => import('@/views/lawer/index'),
        meta: { title: '精英律师推荐', icon: 'form' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
