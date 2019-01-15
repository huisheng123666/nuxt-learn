import mongoose from 'mongoose'

const Schema = mongoose.Schema

const MenuSchema = new Schema({
  menu: {
    type: Array,
    unique: true,
    require: true
  }
})

export default mongoose.model('Menu', MenuSchema)
