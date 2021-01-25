import React, { memo, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import { Box, Typography } from '@material-ui/core'
import constants from '../../../constants'
import TransactionItem from './TransactionItem'
import formatAmount from '../../../utils/formatAmount'

const TransactionList = ({ list }) => (
  <>
    <Box mb="40px">
      <Typography variant="h4">Transactions: </Typography>
    </Box>
    {list.map(({ id, createdAt, type, amount }) => (
      <TransactionItem
        key={id}
        type={type}
        amount={formatAmount(amount)}
        description={`${constants.TRANSACTION.LABELS[type]} of ${amount} USD at ${createdAt}`}
      />
    ))}
  </>
)

export default memo(TransactionList)
