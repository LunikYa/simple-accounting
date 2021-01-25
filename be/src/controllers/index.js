import Router from 'koa-router'
import configureAccount from './account'
import configureTransaction from './transaction'

export default function() {
  const router = new Router({
    prefix: '/api/v1',
  })

  router.use(...configureAccount())
  router.use(...configureTransaction())

  return router
}
