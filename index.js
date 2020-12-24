const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const { bookRouter } = require('./routes/bookRouter')

const PORT = process.env.PORT || 3000;

// create an express app
const app = express();

// add basic logging
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// middleware to parse request
app.use(express.json());

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bookDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
},(err) => {
    if(err) {
        console.error('ERROR ' + err)
    }
})


app.route('/api').get((req,res) =>{
    res.json({
        message: `Welcome to this boring book service!`
    })
})

app.use('/api/books', bookRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

