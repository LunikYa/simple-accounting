import React, { memo } from 'react'

import { Box, Paper, Grid, Fade, Backdrop, Modal } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

import './styles.css'

function ModalWindow({ isOpen, onClose, children }: any) {
  return (
    <Modal
      disableEnforceFocus
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 300,
      }}>
      <Fade in={isOpen}>
        <div className="modal-container">
          <Paper className="modal-paper">
            <Grid
              container
              direction="row"
              justify="flex-end"
              style={{ padding: '10px', cursor: 'pointer' }}>
              <CloseIcon onClick={onClose} color="primary" />
            </Grid>
            {children}
          </Paper>
        </div>
      </Fade>
    </Modal>
  )
}

export default memo(ModalWindow)
