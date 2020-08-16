const InnerLayout = () => import(/* webpackChunkName:'innerLayout' */ '@/layouts/inner-layout')
const Forbidden = () => import(/* webpackChunkName:'forbidden' */ '@/pages/error/forbbiden')
const NotFound = () => import(/* webpackChunkName:'notFound' */ '@/pages/error/not-found')

const route = {
  name: 'Error',
  path: '/error',
  component: InnerLayout,
  meta: {
    title: '错误处理',
    icon: 'error'
  },
  children: [
    {
      name: 'Forbidden',
      path: '/error/forbidden',
      component: Forbidden,
      meta: {
        title: '403',
        noCache: true
      }
    },
    {
      name: 'NotFound',
      path: '/error/notFound',
      component: NotFound,
      meta: {
        title: '404',
        noCache: true
      }
    }
  ]
}

export default route
