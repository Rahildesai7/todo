const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://uname:password@cluster0.jnlez.mongodb.net/<dbname>?retryWrites=true&w=majority'
const bodyParser = require('body-parser');

const Todo = require('./models/todo')
const todoRoutes = require('./routes/todos')

mongoose.connect(mongoURI,{useNewUrlParser: true});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs')
app.use( express.static(__dirname + '/public') )

app.get('/', (req, res)=>{
    res.render('index')
})
app.use('/todos', todoRoutes)

app.listen(port, ()=>{
    console.log('server has been started');
});