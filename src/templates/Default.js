import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

import Header from '../components/Header'
import Footer from '../components/Footer'

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(6, 0, 6),
  }
}))

const Default = ({ children }) => {

  const classes = useStyles()

  return (
    <>
      <Header />
      <Box className={classes.container}>
        {children}
      </Box>
      <Footer />
    </>
  )
}

export default Default
