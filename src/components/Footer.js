import { Container, Grid, Box, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles'
import Link from 'next/link'

const useStyles = makeStyles((theme)=>({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    }
  },
  textLink: {
    cursor: 'pointer',
  }
}))


const Footer = () => {

  const classes = useStyles()
  return (
    <Container maxWidth="lg" component="footer" className={classes.footer}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="/" passHref>
              <Typography color="textSecondary" variant="subtitle1" className={classes.textLink}>
                Ajuda e contato
              </Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="/" passHref>
              <Typography color="textSecondary" variant="subtitle1" className={classes.textLink}>
                Dicas de seguranca
              </Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="/" passHref>
              <Typography color="textSecondary" variant="subtitle1" className={classes.textLink}>
                Anunciar e Vender
              </Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href="/" passHref>
              <Typography color="textSecondary" variant="subtitle1" className={classes.textLink}>
                Plano Profissional
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer