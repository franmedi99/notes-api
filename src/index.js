require('dotenv').config();


const app = require('./app');
require('./database');

async function main  (){
   await app.listen(app.get('port'));
    console.log('server abierto en el puerto', app.get('port'));

}


main();