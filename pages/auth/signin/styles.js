import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    paddingBottom: theme.spacing(3),
  },
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
    border: '0px',
  },
  inputLabel: {
    fontWeight: 400,
    color: theme.palette.primary.main,
  },
}))

export default useStyles
