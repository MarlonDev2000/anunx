import * as yup from 'yup'

const values = {
  email: '',
  password: '',
}

const validationSchema = yup.object().shape({
  email: yup.string().email('Digite um e-mail valido').required('Campo Obrigatorio*'),
  password: yup.string().min(6, 'Minimo de 6 caracteres').required('Campo Obrigatorio*'),
})

export { values, validationSchema }
