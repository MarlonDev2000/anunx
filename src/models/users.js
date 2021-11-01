import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'O campo "nome" e obrigatorio'],
  },
  email: {
    type: String,
    required: [true, 'O campo "email" e obrigatorio'],
  },
  password: {
    type: String,
    required: [true, 'O campo "senha" e obrigatorio'],
  },
})

export default mongoose.models.users || mongoose.model('users', schema)
