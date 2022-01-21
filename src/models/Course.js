const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Course = new Schema({
   _id: ObjectId,
   name: { type: String, default: '', maxlength: 255 },
   description: { type: String, default: '', maxlength: 600 },
   image: { type: String, default: '' },
   createdAt: { type: Date, default: Date.now },
   updateAt: { type: Date, default: Date.now },
   slug: { type: String, default: ''}
})

module.exports = mongoose.model('Course', Course);