import React, { memo, useCallback } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

import constants from '../../../constants'

const TransactionItem = ({ type, amount, date, description }) => {
  const getIcon = useCallback(() => {
    if (type === constants.TRANSACTION.TYPE.DEBIT) {
      return <ArrowUpwardIcon htmlColor="#41B619" />
    }

    return <ArrowDownwardIcon htmlColor="#B40A1B" />
  }, [type])

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <>
          {getIcon()}
          <Typography variant="body1">{amount} USD</Typography>
        </>
      </AccordionSummary>
      <AccordionDetails>{description}</AccordionDetails>
    </Accordion>
  )
}

export default memo(TransactionItem)
