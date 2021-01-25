import Queue from 'better-queue'
import constants from '../constants'

const { TRANSACTION } = constants

const store = {
  account: {
    name: 'John',
    surname: 'Doe',
    balance: 45000,
    transactions: [],
  },
}

const transaction = new Queue(
  (task, cb) => {
    const { type, amount } = task
    const { transactions } = store.account

    if (type === TRANSACTION.TYPE.DEBIT) {
      store.account.balance -= amount
    } else {
      store.account.balance += amount
    }

    transactions.push({
      id: transactions.length + 1,
      type,
      amount,
      createdAt: new Date().toUTCString(),
    })

    cb()
  },
  {
    filter: (task, cb) => {
      const { type, amount } = task
      const {
        account: { balance },
      } = store

      if (!TRANSACTION.TYPE[type]) {
        console.log('1', type)
        return cb('unknownType', task)
      }

      if (typeof amount !== 'number') {
        console.log('2')

        return cb('invalidAmount', task)
      }

      const isDebit = type === TRANSACTION.TYPE.DEBIT
      const insufficientFunds = isDebit && balance < amount

      if (insufficientFunds) {
        console.log('3')

        return cb('insufficientFunds', task)
      }

      return cb(null, task)
    },
    failTaskOnProcessException: true,
  },
)

export const pushTransaction = async ({ type, amount }) =>
  new Promise((res, rej) => {
    transaction
      .push({ type, amount: parseFloat(amount) })
      .on('finish', () => {
        const { transactions: list } = store.account

        res(list)
      })
      .on('failed', (taskId, err) => {
        console.log('FAILED')
        rej(err)
      })
  })

export default store
