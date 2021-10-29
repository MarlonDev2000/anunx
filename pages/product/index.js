import {
  Container,
  Grid,
  Box,
  Typography,
  Chip,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  productName: {
    margin: '15px 0px',
  },
  price: {
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    height: '100%',
  },
  cardMedia: {
    paddingTop: '56%',
  },
}))

const Product = () => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Box className={classes.box}>
              <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false}>
                <Card className={classes.card}>
                  <CardMedia
                    image="https://source.unsplash.com/random"
                    title="Titulo da imagem"
                    className={classes.cardMedia}
                  />
                </Card>
                <Card className={classes.card}>
                  <CardMedia
                    image="https://source.unsplash.com/random"
                    title="Titulo da imagem"
                    className={classes.cardMedia}
                  />
                </Card>
              </Carousel>
            </Box>

            <Box className={classes.box} textAlign="left">
              <Typography component="span" variant="caption">
                Publicado 16 de junho de 2021
              </Typography>
              <Typography component="h4" variant="h4" className={classes.productName}>
                Jaguar XE 2.0 D R-Sport Aut.
              </Typography>
              <Typography component="h4" variant="h4" className={classes.price}>
                R$ 50.000,000
              </Typography>
              <Chip label="Categoria" />
            </Box>

            <Box className={classes.box} textAlign="left">
              <Typography component="h6" variant="h6">
                Descrição
              </Typography>
              <Typography component="p" variant="body2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularized in the 1960s with
                the release of Letraste sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Ladus PageMaker including versions of Lorem
                Ipsum.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Card className={classes.box} elevation={0}>
              <CardHeader
                avatar={<Avatar>M</Avatar>}
                title="Marlon Braga"
                subheader="marloncs13@outlook.com"
              />
              <CardMedia image={'https://source.unsplash.com/random'} title="Marlon Braga" />
            </Card>

            <Box className={classes.box}>
              <Typography component="h6" variant="h6">
                Localizacao
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export default Product
