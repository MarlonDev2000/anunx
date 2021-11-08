import { Formik } from 'formik'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/client'

import {
  Container,
  Typography,
  Box,
  Button,
  InputLabel,
  FormControl,
  FormHelperText,
  Input,
  CircularProgress,
  Alert,
} from '@mui/material'

import TemplateDefault from '../../../src/templates/Default'
import { validationSchema, values } from './formValues'
import useToasty from '../../../src/contexts/Toasty'
import useStyles from './styles'

const Signin = () => {
  const classes = useStyles()
  const router = useRouter()
  const { setToasty } = useToasty()
  const [session] = useSession()

  console.log(session)

  const handleFormSubmit = async (values) => {
    signIn('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: 'http://localhost:3000/user/dashbord',
    })
  }

  return (
    <TemplateDefault>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary">
          Entre na sua conta
        </Typography>
      </Container>

      <Formik
        initialValues={values}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ touched, values, errors, handleChange, handleSubmit, isSubmitting }) => {
          return (
            <form onSubmit={handleSubmit}>
              <br /> <br />
              <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
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
                  {router.query.i === '1' ? (
                    <Alert severity="error" className={classes.errorMessage}>
                      Usuario ou senha invalidos
                    </Alert>
                  ) : null}
                  <Box textAlign="center" marginTop={5}>
                    {isSubmitting ? (
                      <CircularProgress />
                    ) : (
                      <Button color="primary" variant="contained" type="submit" fullWidth>
                        Entrar
                      </Button>
                    )}
                  </Box>
                  <Box marginTop={2}>
                    <Button color="primary" variant="outlined" size="small" href="/auth/signup">
                      Cadastre-se Agora!
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

export default Signin
