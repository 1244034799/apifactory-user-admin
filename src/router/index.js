import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/register', component: () => import('@/views/login/register'), hidden: true },
  { path: '/resetpwd', component: () => import('@/views/login/resetpwd'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    name: '修改密码',
    path: '/editPwd',
    hidden: true,
    component: Layout,
    meta: { title: '修改密码', icon: 'setting' },
    children: [{
      path: '',
      component: () => import('@/views/editPwd/list')
    }]
  },

  {
    name: '首页',
    path: '',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'home' }
    }]
  },

  {
    name: '工厂设置',
    path: '/user/centerUserResourceBundle',
    component: Layout,
    redirect: '/user/centerUserResourceBundle/list',
    meta: { title: '工厂设置', icon: 'setting' },
    children: [{
      name: '我的资源包',
      path: 'list',
      component: () => import('@/views/centerUserResourceBundle/list'),
      meta: { title: '我的资源包', icon: 'ziyuan' }
    },
    {
      name: '我的资源包2',
      path: 'dashboard3',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '我的资源包2', icon: 'setting' }
    }]
  },

  {
    name: '系统设置',
    path: '/user/apiExtDfs',
    component: Layout,
    redirect: '/user/apiExtDfs/list',
    meta: { title: '系统设置', icon: 'setting' },
    children: [{
      name: '上传文件管理',
      path: 'list',
      component: () => import('@/views/apiExtDfs/list'),
      meta: { title: '上传文件管理', icon: 'files' }
    },
    {
      name: '我的资源包2',
      path: 'dashboard3',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '我的资源包2', icon: 'setting' }
    }]
  },
  {
    name: '商城管理',
    path: '/user',
    component: Layout,
    redirect: '/user/apiExtShopSub/list',
    meta: { title: '商城管理', icon: 'shopping' },
    children: [{
      name: '店铺管理',
      path: 'apiExtShopSub/list',
      component: () => import('@/views/apiExtShopSub/list'),
      meta: { title: '店铺管理', icon: 'shop' }
    },
    {
      name: '店铺管理',
      path: 'apiExtShopSub/add',
      component: () => import('@/views/apiExtShopSub/add'),
      hidden: true
    },
    {
      name: '商品分类',
      path: 'apiExtShopGoodsCategory/list',
      component: () => import('@/views/apiExtShopGoodsCategory/list'),
      meta: { title: '商品分类', icon: 'category' }
    },
    {
      name: '规格尺寸',
      path: 'apiExtShopProperty/list',
      component: () => import('@/views/apiExtShopProperty/list'),
      meta: { title: '规格尺寸', icon: 'guigecicun' }
    },
    {
      name: '运费模板',
      path: 'apiExtShopFreightTemplate/list',
      component: () => import('@/views/apiExtShopFreightTemplate/list'),
      meta: { title: '运费模板', icon: 'yunfeimoban' }
    },
    {
      name: '添加修改运费模板',
      path: 'apiExtShopFreightTemplate/add',
      component: () => import('@/views/apiExtShopFreightTemplate/add'),
      meta: { title: '运费模板', icon: 'yunfeimoban' },
      hidden: true
    },
    {
      name: '评价管理',
      path: 'apiExtOrderEvaluate/list',
      component: () => import('@/views/apiExtOrderEvaluate/list'),
      meta: { title: '评价管理', icon: 'pingjia' }
    },
    {
      name: '达达门店',
      path: 'expressDadaShopCitycode/list',
      component: () => import('@/views/expressDadaShopCitycode/list'),
      meta: { title: '达达门店', icon: 'dada' }
    },
    {
      name: '知识交易设置',
      path: 'virtualTraderSet/list',
      component: () => import('@/views/virtualTraderSet/list'),
      meta: { title: '知识交易设置', icon: 'zhishi' }
    },
    {
      name: '添加知识交易',
      path: 'virtualTraderSet/add',
      component: () => import('@/views/virtualTraderSet/add'),
      meta: { title: '知识交易', icon: 'zhishi' },
      hidden: true
    }]
  },

  {
    name: '支付宝小程序',
    path: '/user',
    component: Layout,
    redirect: '/user/centerUserAliappKey/list',
    meta: { title: '支付宝小程序', icon: 'alipaySR' },
    children: [{
      name: 'Appid配置',
      path: 'centerUserAliappKey/list',
      component: () => import('@/views/centerUserAliappKey/list'),
      meta: { title: '支付宝小程序', icon: 'alipaySR' }
    }]
  },

  {
    name: '视频点播',
    path: '/user/apiExtVod',
    component: Layout,
    children: [
      {
        path: 'list',
        name: '视频点播',
        component: () => import('@/views/apiExtVod/list'),
        meta: { title: '视频点播', icon: 'video' }
      }
    ]
  },

  {
    name: '营销辅助',
    path: '/user',
    component: Layout,
    redirect: '/user/kanjiaSet/list',
    meta: { title: '营销辅助', icon: 'yingxiao' },
    children: [{
      name: '砍价设置',
      path: 'kanjiaSet/list',
      component: () => import('@/views/kanjiaSet/list'),
      meta: { title: '砍价设置', icon: 'kanjia' }
    },
    {
      name: '砍价参与用户',
      path: 'kanjiaJoiner/list',
      component: () => import('@/views/kanjiaJoiner/list'),
      meta: { title: '砍价参与用户', icon: 'kanjia' }
    },
    {
      name: '砍价明细',
      path: 'kanjiaHelp/list',
      component: () => import('@/views/kanjiaHelp/list'),
      meta: { title: '砍价明细', icon: 'kanjia' }
    },
    {
      name: '拼团设置',
      path: 'pingtuanSet/list',
      component: () => import('@/views/pingtuanSet/list'),
      meta: { title: '拼团设置', icon: 'pingtuan' }
    },
    {
      name: '开团记录',
      path: 'pingtuanOpener/list',
      component: () => import('@/views/pingtuanOpener/list'),
      meta: { title: '开团记录', icon: 'pingtuan' }
    },
    {
      name: '拼团记录',
      path: 'pingtuanHelp/list',
      component: () => import('@/views/pingtuanHelp/list'),
      meta: { title: '拼团记录', icon: 'pingtuan' }
    }]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
