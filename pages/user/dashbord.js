import { Button, Container, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'

const useStyles = makeStyles((theme) => ({
  buttonAdd: {
    margin: '30px auto',
    display: 'block',
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
          <Button
            variant="outlined"
            color="primary"
            className={classes.buttonAdd}
          >
            Publicar novo anuncio
          </Button>
        </Container>
        <Container maxWidth="md">
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
    </>
  )
}

export default Dashbord
