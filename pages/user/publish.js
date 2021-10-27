import {
  Container,
  Typography,
  Box,
  Select,
  Button,
  IconButton,
  InputLabel,
  InputAdornment,
  MenuItem,
  FormControl,
  FormHelperText,
  Input,
} from '@mui/material'
import { DeleteForever } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Formik } from 'formik'
import * as yup from 'yup'

import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
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
  inputLabel: {
    fontWeight: 400,
  },
  dropZone: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
    width: 180,
    height: 150,
    margin: '0 15px 15px 0',
    backgroundColor: theme.palette.background.default,
    border: '2px dashed black',
    cursor: 'pointer',
  },
  thumb: {
    position: 'relative',
    margin: '0px 15px 15px 0px',
    width: 180,
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
  },
}))

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .min(6, 'Escreva um titulo maior')
    .max(100, 'Titulo muito grande')
    .required('Campo Obrigatorio*'),
  category: yup.string().required('Campo Obrigatorio*'),
  description: yup
    .string()
    .min(50, 'Escreva uma descricao com pelo menos 50 caracteres.')
    .required('Campo Obrigatorio*'),
  price: yup.number().positive().required('Campo Obrigatorio*'),
  email: yup.string().email('Digite um e-mail valido').required('Campo Obrigatorio*'),
  name: yup.string().required('Campo Obrigatorio*'),
  phone: yup.number().required('Campo Obrigatorio*'),
  files: yup.array().min(1, 'Envie pelo menos 1 imagem*').required('Campo Obrigatorio*'),
})

const Publish = () => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Formik
        initialValues={{
          title: '',
          category: '',
          description: '',
          price: '',
          email: '',
          name: '',
          phone: '',
          files: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ touched, values, errors, handleChange, handleSubmit, setFieldValue }) => {
          const { getRootProps, getInputProps } = useDropzone({
            accept: 'image/*',
            onDrop: (acceptedFile) => {
              const newFiles = acceptedFile.map((file) => {
                return Object.assign(file, {
                  preview: URL.createObjectURL(file),
                })
              })

              setFieldValue('files', [...values.files, ...newFiles])
            },
          })

          const handleRemoveFile = (fileName) => {
            const newFileState = values.files.filter((file) => {
              return file.name !== fileName
            })
            setFieldValue('files', newFileState)
          }

          return (
            <form onSubmit={handleSubmit}>
              <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary">
                  Publicar Anuncio
                </Typography>
                <Typography component="h5" variant="h5" align="center" color="textPrimary">
                  Quanto mais detalhado, melhor!
                </Typography>
              </Container>

              <br />
              <br />

              <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                  <FormControl error={errors.title && touched.title} fullWidth>
                    <InputLabel className={classes.inputLabel} variant="standard">
                      Titulo do Anuncio
                    </InputLabel>
                    <Input name="title" value={values.title} onChange={handleChange} />
                    <FormHelperText>
                      {errors.title && touched.title ? errors.title : null}
                    </FormHelperText>
                  </FormControl>
                  <br />
                  <br />
                  <FormControl error={errors.category && touched.category} fullWidth>
                    <InputLabel className={classes.inputLabel} variant="standard">
                      Categoria
                    </InputLabel>
                    <Select
                      name="category"
                      value={values.category}
                      fullWidth
                      onChange={handleChange}
                      variant="standard"
                    >
                      <MenuItem value="Bebe e Crianca">Bebe e Crianca</MenuItem>
                      <MenuItem value="Agricultura">Agricultura</MenuItem>
                      <MenuItem value="Moda">Moda</MenuItem>
                      <MenuItem value="Carros, Motos e Barcos">Carros, Motos e Barcos</MenuItem>
                      <MenuItem value="Servicos">Servicos</MenuItem>
                      <MenuItem value="Lazer">Lazer</MenuItem>
                      <MenuItem value="Animais">Animais</MenuItem>
                      <MenuItem value="Moveis, Casa, Jardim">Moveis, Casa, Jardim</MenuItem>
                      <MenuItem value="Imoveis">Imoveis</MenuItem>
                      <MenuItem value="Equipamentos e Ferramentas">
                        Equipamentos e Ferramentas
                      </MenuItem>
                      <MenuItem value="Celulares e Tablets">Celulares e Tablets</MenuItem>
                      <MenuItem value="Esporte">Esporte</MenuItem>
                      <MenuItem value="Tecnologia">Tecnologia</MenuItem>
                      <MenuItem value="Emprego">Emprego</MenuItem>
                      <MenuItem value="Outros">Outros</MenuItem>
                    </Select>
                    <FormHelperText>
                      {errors.category && touched.category ? errors.category : null}
                    </FormHelperText>
                  </FormControl>
                </Box>
              </Container>

              <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                  <Typography
                    component="h6"
                    variant="h6"
                    color={errors.files && touched.files ? 'error' : 'textPrimary'}
                  >
                    Imagens
                  </Typography>
                  <Typography
                    component="div"
                    variant="body2"
                    color={errors.files && touched.files ? 'error' : 'textPrimary'}
                  >
                    A primeira imagem e foto principal do seu anuncio
                  </Typography>
                  {errors.files && touched.files ? (
                    <Typography variant="body2" color="error" gutterBottom>
                      {errors.files}
                    </Typography>
                  ) : null}
                  <Box className={classes.thumbsContainer}>
                    <Box className={classes.dropZone} {...getRootProps()}>
                      <input name="files" {...getInputProps()} />
                      <Typography variant="body2" color="textPrimary">
                        Clique para adicionar ou araste a imagem para aqui.
                      </Typography>
                    </Box>
                    {values.files.map((file, index) => (
                      <Box
                        className={classes.thumb}
                        style={{ backgroundImage: `url(${file.preview})` }}
                        key={file.name}
                      >
                        {index === 0 ? (
                          <Box className={classes.mainImage}>
                            <Typography variant="body2" color="secondary">
                              Principal
                            </Typography>
                          </Box>
                        ) : null}
                        <Box className={classes.mask}>
                          <IconButton
                            color="secondary"
                            onClick={() => {
                              handleRemoveFile(file.name)
                            }}
                          >
                            <DeleteForever fontSize="large" />
                          </IconButton>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Container>

              <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                  <FormControl error={errors.description && touched.description} fullWidth>
                    <InputLabel className={classes.inputLabel} variant="standard">
                      Escreva os detalhes do que esta vendendo
                    </InputLabel>
                    <Input
                      multiline
                      rows={6}
                      name="description"
                      variant="outlined"
                      onChange={handleChange}
                    />
                    <FormHelperText>
                      {errors.description && touched.description ? errors.description : null}
                    </FormHelperText>
                  </FormControl>
                </Box>
              </Container>

              <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                  <FormControl error={errors.price && touched.price} fullWidth>
                    <InputLabel className={classes.inputLabel} variant="standard">
                      Preço de venda
                    </InputLabel>
                    <Input
                      name="price"
                      startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                      onChange={handleChange}
                    />
                    <FormHelperText>
                      {errors.price && touched.price ? errors.price : null}
                    </FormHelperText>
                  </FormControl>
                </Box>
              </Container>

              <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                  <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                    Dados de Contato
                  </Typography>

                  <FormControl error={errors.name && touched.name} fullWidth>
                    <InputLabel className={classes.inputLabel} variant="standard">
                      Nome:
                    </InputLabel>
                    <Input name="name" value={values.name} onChange={handleChange} />
                    <FormHelperText>
                      {errors.name && touched.name ? errors.name : null}
                    </FormHelperText>
                  </FormControl>

                  <br />
                  <br />
                  <FormControl error={errors.email && touched.email} fullWidth>
                    <InputLabel className={classes.inputLabel} variant="standard">
                      E-mail:
                    </InputLabel>
                    <Input name="email" value={values.email} onChange={handleChange} />
                    <FormHelperText>
                      {errors.email && touched.email ? errors.email : null}
                    </FormHelperText>
                  </FormControl>
                  <br />
                  <br />
                  <FormControl error={errors.phone && touched.phone} fullWidth>
                    <InputLabel className={classes.inputLabel} variant="standard">
                      DDD + Telefone:
                    </InputLabel>
                    <Input name="phone" value={values.phone} onChange={handleChange} />
                    <FormHelperText>
                      {errors.phone && touched.phone ? errors.phone : null}
                    </FormHelperText>
                  </FormControl>
                </Box>
              </Container>
              <Container maxWidth="md" className={classes.boxContainer}>
                <Box textAlign="right">
                  <Button color="primary" variant="contained" type="submit">
                    Publicar Anuncio
                  </Button>
                </Box>
              </Container>
            </form>
          )
        }}
      </Formik>
    </TemplateDefault>
  )
}

export default Publish
