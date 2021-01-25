import store, { pushTransaction, transaction } from '../../store'
import { reject, resolve } from '../../utils/response'

export default async function(ctx) {
  const { amount, type } = ctx.request.body
  try {
    const list = await pushTransaction({ amount, type })

    return resolve(ctx, { list })
  } catch (error) {
    return reject(ctx, 400, error)
  }
}
