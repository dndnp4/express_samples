const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'my_db'
});

module.exports = {
    run: (cb) => {
        connection.connect();
        connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
            if (error) throw error;
            cb(results[0].solution);
        });
        connection.end();
    }
}