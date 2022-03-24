//  Add your code here
const { Schema, model } = require('mongoose')

const schema = new Schema({
    title: String,
    genre: String,
    plot: String,
    cast: [{ type: Schema.Types.ObjectId, ref: 'Celebrity' }]
})
  
const Movie = model('Movie', schema)

module.exports = Movie