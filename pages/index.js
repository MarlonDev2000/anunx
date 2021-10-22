import {
  Container,
  Typography,
  Box,
  InputBase,
  IconButton,
  Paper,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button
} from '@mui/material'
import { Search } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'


import TemplateDefault from '../src/templates/Default'

const useStyles = makeStyles((theme)=>({
  searchContainer: {
    padding: theme.spacing(8, 10, 6)
  },
  searchBox: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    margin: 20,
    borderRadius: 3
  },
  cardMedia: {
    paddingTop: '56%',
  },
}))


const Home = () => {

  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="md" className={classes.searchContainer}>
        <Typography component="h1" variant="h3" align="center" color="textPrimary">
          O que deseja encontrar?
        </Typography>
        <Paper className={classes.searchBox}>
          <InputBase placeholder="Ex: Iphone 12 com garantia" fullWidth />
          <IconButton>
            <Search />
          </IconButton>
        </Paper>
      </Container>


      <Container maxWidth="lg" className={classes.cardGrid}>
        <Typography component="h2" variant="h4" align="center" color="textPrimary">
          Destaques
        </Typography>
        <br/>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                image={'https://source.unsplash.com/random'}
                title="Titulo da imagem"
                className={classes.cardMedia}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>R$ 60,00</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                image={'https://source.unsplash.com/random'}
                title="Titulo da imagem"
                className={classes.cardMedia}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>R$ 60,00</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                image={'https://source.unsplash.com/random'}
                title="Titulo da imagem"
                className={classes.cardMedia}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>R$ 60,00</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export default Home