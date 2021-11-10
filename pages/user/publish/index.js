import { Formik } from 'formik'
import {
  Container,
  Typography,
  Box,
  Select,
  Button,
  InputLabel,
  InputAdornment,
  MenuItem,
  FormControl,
  FormHelperText,
  Input,
} from '@mui/material'

import TemplateDefault from '../../../src/templates/Default'
import { validationSchema, values } from './formValues'

import useStyles from './styles'
import FileUpload from '../../../src/components/FileUpload'

const Publish = () => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Formik initialValues={values} validationSchema={validationSchema} onSubmit={(values) => {}}>
        {({ touched, values, errors, handleChange, handleSubmit, setFieldValue }) => {
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
                  <FileUpload
                    files={values.files}
                    errors={errors.files}
                    touched={touched.files}
                    setFieldValue={setFieldValue}
                  />
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
