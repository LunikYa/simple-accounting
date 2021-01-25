import Router from 'koa-router'
import create from './post'
import get from './get'

export default function() {
  const router = new Router({
    prefix: '/transaction',
  })

  router.get('/', get)
  router.post('/', create)

  return [router.routes(), router.allowedMethods()]
}
