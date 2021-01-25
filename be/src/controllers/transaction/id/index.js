import Router from 'koa-router'
import create from './post'
import get from './get'

export default function() {
  const router = new Router({
    prefix: '/:trxId',
  })

  router.get('/', get)

  return [router.routes(), router.allowedMethods()]
}
