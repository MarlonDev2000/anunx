import { Alert, Snackbar } from '@mui/material'

const Toasty = ({ open, text, severity, onClose = null, color }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
    }
    if (onClose) {
      onClose()
    }
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert elevation={6} variant="filled" severity={severity} color={color}>
        {text}
      </Alert>
    </Snackbar>
  )
}

export default Toasty
