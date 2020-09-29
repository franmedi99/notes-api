const mongoose = require('mongoose');

const URI = process.env.DATABASE;
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})  

const connection = mongoose.connection;
connection.once ('open', ()=>{
    console.log('Base de datos conectada');
});