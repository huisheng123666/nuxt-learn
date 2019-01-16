import mongoose from 'mongoose'

const Schema = mongoose.Schema

const PoiSchema = new Schema({
  name: {
    type: String,
    unique: true,
    require: true
  },
  province: {
    type: String,
    unique: true,
    require: true
  },
  city: {
    type: String,
    unique: true,
    require: true
  },
  county: {
    type: String,
    unique: true,
    require: true
  },
  areaCode: {
    type: Number,
    unique: true,
    require: true
  },
  tel: {
    type: String
  },
  area: {
    type: String,
    unique: true,
    require: true
  },
  add: {
    type: String,
    unique: true,
    require: true
  },
  type: {
    type: String,
    unique: true,
    require: true
  }
})

export default mongoose.model('Poi', PoiSchema)
