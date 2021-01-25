const TYPE = {
  DEBIT: 'DEBIT',
  CREDIT: 'CREDIT',
}

const LABELS = {
  [TYPE.DEBIT]: 'Withdraw',
  [TYPE.CREDIT]: 'Deposit',
}

const constants = {
  TRANSACTION: {
    TYPE,
    LABELS,
    STATUS: {
      PENDING: 0,
      SUCCESS: 1,
      FAIL: 2,
    },
  },
}

export default constants
