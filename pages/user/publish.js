import { DeleteForever } from '@mui/icons-material'
import { Container, Typography, Box, TextField, Select, Button, IconButton, } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import { useDropzone } from 'react-dropzone'

import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme)=>({
  container: {
    padding: theme.spacing(8, 0, 6),
  },
  boxContainer: {
    paddingBottom: theme.spacing(3),
  },
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
    border: '0px',
  },
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
    width: 200,
    height: 150,
    margin: '0 15px 15px 0',
    backgroundColor: theme.palette.background.default,
    border: '2px dashed black',
    cursor: 'pointer',
  },
  thumb: {
    position: 'relative',
    margin: '0px 15px 15px 0px',
    width: 200,
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
  }
}))

const Publish = () => {
  const classes = useStyles()
  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
     accept: 'image/*',
     onDrop: (acceptedFile) => {
       const newFiles = acceptedFile.map((file)=>{
         return Object.assign(file, {
           preview: URL.createObjectURL(file)
         })
       })
       setFiles([
        ...files,
        ...newFiles,
      ])
     }
  })
  
  const handleRemoveFile = (fileName) => {
    const newFileState = files.filter((file) => { return file.name !== fileName})
    setFiles(newFileState)
  }

  return (
    <TemplateDefault>
      <Container maxWidth="sm" className={classes.container}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" >
          Publicar Anuncio
        </Typography>
        <Typography component="h5" variant="h5" align="center" color="textPrimary" >
          Quanto mais detalhado, melhor!
        </Typography>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component="h6" variant="h6" color="textPrimary" >
            Titulo do Anuncio
          </Typography>
          <TextField 
            label="Exemplo: Bicicleta Aro 18 com garantia"
            size="small"
            fullWidth
          />
          <br/><br/>
          <Typography component="h6" variant="h6" color="textPrimary">
            Categoria
          </Typography>
          <Select
            native
            value=""
            fullWidth
            onChange={()=>{}}
            inputProps={{
              name: 'age',
            }}
          >
            <option value="">Selecione</option>
            <option value={1}>Bebe e Crianca</option>
            <option value={2}>Agricultura</option>
            <option value={3}>Moda</option>
            <option value={3}>Carros, Motos e Barcos</option>
            <option value={3}>Servicos</option>
            <option value={3}>Lazer</option>
            <option value={3}>Animais</option>
            <option value={3}>Moveis, Casa, Jardim</option>
            <option value={3}>Imoveis</option>
            <option value={3}>Equipamentos e Ferramentas</option>
            <option value={3}>Celulares e Tablets</option>
            <option value={3}>Esporte</option>
            <option value={3}>Tecnologia</option>
            <option value={3}>Emprego</option>
            <option value={3}>Outros</option>
          </Select>
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component="h6" variant="h6" color="textPrimary" >
            Imagens
          </Typography>
          <Typography component="div" variant="body2" color="textPrimary" >
            A primeira imagem e foto principal do seu anuncio
          </Typography>
          <Box className={classes.thumbsContainer}>
            <Box className={classes.dropZone} {...getRootProps()}>
              <input {...getInputProps()}/>
              <Typography variant="body2" color="textPrimary">
                Clique para adicionar ou araste a imagem para aqui.
              </Typography>
            </Box>
            {
              files.map((file, index)=> (
                <Box className={classes.thumb} style={{ backgroundImage: `url(${file.preview})`}} key={file.name}>
                  {
                    index === 0 ?
                      <Box className={classes.mainImage}>
                        <Typography variant="body2" color="secondary">
                          Principal
                        </Typography>
                      </Box>
                    : null
                  }
                  <Box className={classes.mask}>
                    <IconButton color="secondary" onClick={()=>{handleRemoveFile(file.name)}}>
                      <DeleteForever fontSize="large"/>
                    </IconButton>
                  </Box>
                </Box>
              ))
            }
          </Box>
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component="h6" variant="h6" color="textPrimary" >
            Descricao
          </Typography>
          <Typography component="div" variant="body2" color="textPrimary" >
            Escreva os detalhes do que esta vendendo
          </Typography>
          <TextField
            multiline
            rows={6}
            variant="outlined"
            fullWidth
          />
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
            Dados de Contato
          </Typography>
          <TextField
            label="Nome"
            variant="outlined"
            size="small"
            fullWidth
          />
          <br/><br/>
          <TextField
            label="E-mail"
            variant="outlined"
            size="small"
            fullWidth
          />
          <br/><br/>
          <TextField
            label="Telefone"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Box>
      </Container>
      <Container maxWidth="md" className={classes.boxContainer}>
        <Box textAlign="right">
          <Button color="primary" variant="contained">Publicar Anuncio</Button>
        </Box>
      </Container>
    </TemplateDefault>
  )
}

export default Publish
