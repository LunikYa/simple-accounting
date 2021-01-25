import Koa from 'koa'
import logger from 'koa-logger'
import cors from '@koa/cors'
import koaBody from 'koa-bodyparser'
import configureRouter from './controllers'
const { PORT: port = 4001, NODE_ENV: env = 'development' } = process.env

export function boot() {
  const router = configureRouter()
  const app = new Koa().use(cors())

  app
    .use(logger())
    .use(koaBody())
    .use(router.routes())
    .use(router.allowedMethods())

  return app
}

boot().listen(port, () => {
  console.debug(`API ready on port ${port || ''}`)
  console.debug(`Environment: ${env || ''}`)
})
