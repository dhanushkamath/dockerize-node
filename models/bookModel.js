const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/*
 * Schema for book
*/
bookSchema = new Schema({
    title: {
        type: String,
        default: ""
    },
    author: {
        type: String,
        default: ""
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
  
module.exports = {
    bookSchema: bookSchema
}
  