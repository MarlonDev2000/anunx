import {
  Container,
  Typography,
  Box,
  InputBase,
  IconButton,
  Paper,
  Grid,
  Button,
} from '@mui/material'
import { Search } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'

import TemplateDefault from '../src/templates/Default'
import Card from '../src/components/Card'

const useStyles = makeStyles((theme) => ({
  searchBox: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    margin: 20,
    borderRadius: 3,
  },
  cardGrid: {
    marginTop: 50,
  },
}))

const Home = () => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="md">
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
        <br />
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'}
              title="Produto X"
              subtitle="R$ 60,00"
              actions={
                <>
                  <Button size="small" color="primary" variant="outlined">
                    Editar
                  </Button>
                  <Button size="small" color="primary" variant="outlined">
                    Excluir
                  </Button>
                </>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'}
              title="Produto X"
              subtitle="R$ 60,00"
              actions={
                <>
                  <Button size="small" color="primary" variant="outlined">
                    Editar
                  </Button>
                  <Button size="small" color="primary" variant="outlined">
                    Excluir
                  </Button>
                </>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'}
              title="Produto X"
              subtitle="R$ 60,00"
              actions={
                <>
                  <Button size="small" color="primary" variant="outlined">
                    Editar
                  </Button>
                  <Button size="small" color="primary" variant="outlined">
                    Excluir
                  </Button>
                </>
              }
            />
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export default Home
