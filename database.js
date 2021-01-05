const mysql = require('mysql');
const config = require('./config.json');

const connection = mysql.createConnection({
    host: config.DATA.HOST,
    database: config.DATA.DATABASE,
    user: config.DATA.USER,
    password: config.DATA.PASSWORD
});

connection.connect(function(err) {
    if (err) {
        console.error('Error en la conexion a la base de datos:\n' + err.stack);
        return;
    }
    console.log('Conectado satisfactoriamente a la base de datos \"' + config.DATA.DATABASE + '\".\n');
});

async function RandomJoke() {
    const query = "select joke_content FROM joke where joke_id = (FLOOR(1 + RAND() * ((select COUNT(*) from joke)))) limit 1";
    const joke = await executeSQL(query);
    return joke;
}

function executeSQL(query) {
    return new Promise((resolve, reject) => {
        connection.query(query, (error, results, fields) =>{
            if(error){
                return reject(error);
            }else{
                return resolve(results);
            }
        });
    });
}

exports.RandomJoke = RandomJoke();
