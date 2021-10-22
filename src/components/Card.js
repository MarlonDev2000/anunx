import {
  Card as CardMUI,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'

import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  cardMedia: {
    paddingTop: '56%',
  },
}))

const Card = ({ image,title,subtitle, actions }) => {
  const classes = useStyles()

  return (
    <CardMUI>
      <CardMedia
        image={image}
        title="Titulo da imagem"
        className={classes.cardMedia}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>{subtitle}</Typography>
      </CardContent>
      {
        actions
          ? (
            <CardActions>
              {actions}
            </CardActions>
          )
          : null
      }

    </CardMUI>
  )
}

export default Card