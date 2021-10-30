import { Formik } from 'formik'
import {
  Container,
  Typography,
  Box,
  Button,
  InputLabel,
  FormControl,
  FormHelperText,
  Input,
} from '@mui/material'

import { validationSchema, values } from './formValues'
import useStyles from './styles'

import TemplateDefault from '../../../src/templates/Default'

const Signup = () => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary">
          Crie sua conta
        </Typography>
        <Typography component="h5" variant="h5" align="center" color="textPrimary">
          Anuncie para todo o Brasil!
        </Typography>
      </Container>

      <Formik
        initialValues={values}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ touched, values, errors, handleChange, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <br /> <br />
              <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                  <FormControl error={errors.name && touched.name} fullWidth>
                    <InputLabel className={classes.inputLabel} variant="standard">
                      Nome:
                    </InputLabel>
                    <Input name="name" value={values.name} onChange={handleChange} />
                    <FormHelperText>
                      {errors.name && touched.name ? errors.name : null}
                    </FormHelperText>
                  </FormControl>
                  <br /> <br />
                  <FormControl error={errors.email && touched.email} fullWidth>
                    <InputLabel className={classes.inputLabel} variant="standard">
                      E-mail
                    </InputLabel>
                    <Input name="email" value={values.email} onChange={handleChange} />
                    <FormHelperText>
                      {errors.email && touched.email ? errors.email : null}
                    </FormHelperText>
                  </FormControl>
                  <br /> <br />
                  <FormControl error={errors.password && touched.password} fullWidth>
                    <InputLabel className={classes.inputLabel} variant="standard">
                      Senha
                    </InputLabel>
                    <Input
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      type="password"
                    />
                    <FormHelperText>
                      {errors.password && touched.password ? errors.password : null}
                    </FormHelperText>
                  </FormControl>
                  <br /> <br />
                  <FormControl error={errors.confirmPassword && touched.confirmPassword} fullWidth>
                    <InputLabel className={classes.inputLabel} variant="standard">
                      Confirmação de senha
                    </InputLabel>
                    <Input
                      name="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      type="password"
                    />
                    <FormHelperText>
                      {errors.confirmPassword && touched.confirmPassword
                        ? errors.confirmPassword
                        : null}
                    </FormHelperText>
                  </FormControl>
                  <Box textAlign="center" marginTop={5}>
                    <Button color="primary" variant="contained" type="submit" fullWidth>
                      Cadastrar
                    </Button>
                  </Box>
                  <Box marginTop={2}>
                    <Button color="primary" variant="outlined" size="small" href="/signin">
                      Já possui uma conta? Entre Aqui!
                    </Button>
                  </Box>
                </Box>
              </Container>
            </form>
          )
        }}
      </Formik>
    </TemplateDefault>
  )
}

export default Signup
