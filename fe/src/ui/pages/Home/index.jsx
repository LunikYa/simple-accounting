import React, { memo, useCallback, useEffect, useState } from 'react'
import {
  Button,
  Paper,
  Card,
  Input,
  Typography,
  Box,
  TextField,
  Grid,
} from '@material-ui/core'
import TransactionList from './TransactionList'
import API from '../../../api'
import ModalWindow from '../../components/ModalWindow/'
import constants from '../../../constants'

const Home = () => {
  const [transactions, setTransactions] = useState([])
  const [account, setAccount] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [amount, setAmount] = useState()
  const [type, setType] = useState('')

  useEffect(async () => {
    const { list } = await API.transaction.get()
    setTransactions(list)
  }, [])

  useEffect(async () => {
    const account = await API.account.get()
    setAccount(account)
  }, [transactions])

  const closeModal = useCallback(() => {
    setType('')
    setIsModalOpen(false)
  }, [])

  const openCreditModal = useCallback(() => {
    setType(constants.TRANSACTION.TYPE.CREDIT)
    setIsModalOpen(true)
  }, [])

  const openDebitModal = useCallback(() => {
    setType(constants.TRANSACTION.TYPE.DEBIT)
    setIsModalOpen(true)
  }, [])

  const submit = useCallback(async () => {
    if (!amount) {
      return
    }

    const { list } = await API.transaction.post({ amount, type })
    setTransactions(list)
    closeModal()
  }, [amount, type])

  return (
    <div className="page">
      <Box mb="40px">
        <Typography variant="h2">{`Balance: ${
          account?.balance || 0
        }`}</Typography>
      </Box>
      <Box mb="40px">
        <TransactionList list={transactions} />
      </Box>
      <Box display="flex" alignItems="center" flexDirection="row">
        <Box mr="20px">
          <Button color="primary" variant="contained" onClick={openDebitModal}>
            Deposit
          </Button>
        </Box>
        <Button color="primary" variant="outlined" onClick={openCreditModal}>
          Withdraw
        </Button>
      </Box>
      {isModalOpen && (
        <ModalWindow isOpen={isModalOpen} onClose={closeModal}>
          <Box display="flex" flexDirection="column" p="20px" pl="100px">
            <Box mb="40px">
              <Typography variant="h3">Enter Details</Typography>
            </Box>
            <Box mb="40px">
              <TextField
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                label="Amount"
                required={true}
                variant="outlined"
              />
            </Box>
            <Box>
              <Button
                color="primary"
                variant="contained"
                size="large"
                onClick={submit}>
                Submit
              </Button>
            </Box>
          </Box>
        </ModalWindow>
      )}
    </div>
  )
}

export default memo(Home)
