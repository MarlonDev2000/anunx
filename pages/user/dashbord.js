import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
  buttonAdd: {
    margin: '30px auto',
    display: 'block',
  },
  cardMedia: {
    paddingTop: '56%',
  },
}))

const Dashbord = () => {
  const classes = useStyles()
  return (
    <>
      <TemplateDefault>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center">
            Meus Anuncios
          </Typography>
          <Button variant="outlined" color="primary" className={classes.buttonAdd}>
            Publicar novo anuncio
          </Button>
        </Container>
        <Container maxWidth="md">
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
                <CardActions>
                  <Button size="small" color="primary" variant="outlined">
                    Editar
                  </Button>
                  <Button size="small" color="primary" variant="outlined">
                    Excluir
                  </Button>
                </CardActions>
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
                <CardActions>
                  <Button size="small" color="primary" variant="outlined">
                    Editar
                  </Button>
                  <Button size="small" color="primary" variant="outlined">
                    Excluir
                  </Button>
                </CardActions>
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
                <CardActions>
                  <Button size="small" color="primary" variant="outlined">
                    Editar
                  </Button>
                  <Button size="small" color="primary" variant="outlined">
                    Excluir
                  </Button>
                </CardActions>
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
                <CardActions>
                  <Button size="small" color="primary" variant="outlined">
                    Editar
                  </Button>
                  <Button size="small" color="primary" variant="outlined">
                    Excluir
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </TemplateDefault>
    </>
  )
}

export default Dashbord
