const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Seamen42.',
    database: 'burger_db'
});

con.connect((err)=>{
    if(err) throw err;
    console.log(`Connected to ${con.threadId}`)
})

module.exports = con;