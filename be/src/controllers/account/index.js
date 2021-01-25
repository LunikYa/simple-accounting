import Router from 'koa-router'
import get from './get'

export default function() {
  const router = new Router({
    prefix: '/account',
  })

  router.get('/', get)

  return [router.routes(), router.allowedMethods()]
}
