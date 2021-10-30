import * as yup from 'yup'

const values = {
  email: '',
  name: '',
  password: '',
  confirmPassword: '',
}

const validationSchema = yup.object().shape({
  email: yup.string().email('Digite um e-mail valido').required('Campo Obrigatorio*'),
  name: yup.string().required('Campo Obrigatorio*'),
  password: yup.string().min(6, 'Minimo de 6 caracteres').required('Campo Obrigatorio*'),
  confirmPassword: yup
    .string()
    .required('Campo Obrigatorio*')
    .oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais'),
})

export { values, validationSchema }
