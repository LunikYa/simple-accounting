import { resolve } from '../../utils/response'
import store from '../../store'

export default async function(ctx) {
  const { balance } = store.account

  return resolve(ctx, { balance })
}
