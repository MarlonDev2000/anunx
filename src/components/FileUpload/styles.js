import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  thumbsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 15,
  },
  dropZone: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
    width: 180,
    height: 150,
    margin: '0 15px 15px 0',
    backgroundColor: theme.palette.background.default,
    border: '2px dashed black',
    cursor: 'pointer',
  },
  thumb: {
    position: 'relative',
    margin: '0px 15px 15px 0px',
    width: 180,
    height: 150,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',

    '&:hover $mask': {
      display: 'flex',
    },
  },
  mask: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  mainImage: {
    backgroundColor: '#3385ff',
    padding: '6px 10px',
    position: 'absolute',
    bottom: '0',
    left: '0',
  },
}))

export default useStyles
