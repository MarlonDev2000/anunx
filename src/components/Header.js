import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import { AccountCircle } from '@mui/icons-material'
import Link from 'next/link'

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
    cursor: 'pointer',
  },
  avatarIcon: {
    marginLeft: 6,
  },
  sellLinkButton: {
    marginRight: 6,
  },
  divider: {
    margin: '8px 0px',
  },
}))

const Header = () => {
  const classes = useStyles()
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)

  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <>
      <AppBar position="static" elevation={3}>
        <Container maxWidth="lg">
          <Toolbar>
            <Link href="/" passHref>
              <Typography variant="h6" className={classes.title}>
                AnunX
              </Typography>
            </Link>
            <Link href="/user/publish" passHref>
              <Button
                color="inherit"
                variant="outlined"
                className={classes.sellLinkButton}
              >
                Anunciar e Vender
              </Button>
            </Link>
            <IconButton
              color="secondary"
              onClick={e => {
                setAnchorUserMenu(e.currentTarget)
              }}
            >
              {true === false ? (
                <Avatar src="" />
              ) : (
                <AccountCircle fontSize="large" />
              )}
              <Typography
                variant="subtitle2"
                color="secondary"
                className={classes.avatarIcon}
              >
                Marlon Braga
              </Typography>
            </IconButton>
            <Menu
              open={openUserMenu}
              anchorEl={anchorUserMenu}
              onClose={() => {
                setAnchorUserMenu(null)
              }}
            >
              <Link href="/user/dashbord" passHref>
                <MenuItem>Meus Anuncios</MenuItem>
              </Link>
              <Link href="/user/publish" passHref>
                <MenuItem>Publicar novo anuncio</MenuItem>
              </Link>
              <Divider className={classes.divider} />
              <MenuItem>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Header
