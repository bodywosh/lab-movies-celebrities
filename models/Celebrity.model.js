//  Add your code here
const { Schema, model } = require('mongoose')

const schema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
})
  
const Celebrity = model('Celebrity', schema)

module.exports = Celebrity