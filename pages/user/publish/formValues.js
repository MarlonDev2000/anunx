import * as yup from 'yup'

const values = {
  title: '',
  category: '',
  description: '',
  price: '',
  email: '',
  name: '',
  phone: '',
  files: [],
}

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

export { values, validationSchema }
