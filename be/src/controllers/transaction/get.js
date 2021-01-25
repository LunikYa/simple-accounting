import { resolve } from '../../utils/response'
import store from '../../store'
import transaction from '../../'

export default async function(ctx) {
  const { transactions: list } = store.account

  return resolve(ctx, { list })
}
