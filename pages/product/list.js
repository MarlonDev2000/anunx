import {
  Container,
  Typography,
  Paper,
  InputBase,
  IconButton,
  Grid,
  Button,
  Box,
} from '@mui/material'
import { Search } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'

import Card from '../../src/components/Card'
import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles(theme => ({
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
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(4),
    marginBottom: theme.spacing(3),
  },
}))

const List = () => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <Paper className={classes.searchBox} component="form">
              <InputBase
                placeholder="Ex: IPhone XS MAX com garantia"
                fullWidth
              />
              <IconButton type="submit" aria-label="search">
                <Search />
              </IconButton>
            </Paper>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Box className={classes.box}>
            <Typography component="h6" variant="h6">
              Anuncios
            </Typography>
            <Typography component="body1" variant="subtitle2">
              ENCONTRADOS 200 ANUNCIOS
            </Typography>
            <br />
            <br />
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  image={'https://picsum.photos/300'}
                  title="Produto 1"
                  subtitle="R$ 60,00"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  image={'https://picsum.photos/300'}
                  title="Produto 2"
                  subtitle="R$ 60,00"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  image={'https://picsum.photos/300'}
                  title="Produto 3"
                  subtitle="R$ 60,00"
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export default List
