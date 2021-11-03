import { Formik } from 'formik'
import axios from 'axios'
import { useRouter } from 'next/router'
import { grey } from '@mui/material/colors'
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
} from '@mui/material'

import TemplateDefault from '../../../src/templates/Default'
import { validationSchema, values } from './formValues'
import useToasty from '../../../src/contexts/Toasty'
import useStyles from './styles'

const Signup = () => {
  const classes = useStyles()
  const router = useRouter()
  const { setToasty } = useToasty()

  const handleFormSubmit = async (values) => {
    const response = await axios.post('/api/users', values)

    if (response.data.success) {
      setToasty({
        open: true,
        severity: 'success',
        text: 'Cadastro realizado com sucesso!',
      })
      router.push('/auth/signin')
    }
  }

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
        onSubmit={handleFormSubmit}
      >
        {({ touched, values, errors, handleChange, handleSubmit, isSubmitting }) => {
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
                    {isSubmitting ? (
                      <CircularProgress />
                    ) : (
                      <Button color="primary" variant="contained" type="submit" fullWidth>
                        Cadastrar
                      </Button>
                    )}
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
