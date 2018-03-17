const con = require('./connection');

var orm = {
    getAll: (cb) => {
        var query = `select * from burgers`;
        con.query(query, (err, data)=>{
            if(err) throw err;
            //console.log(data)
            cb(data);
        })
    },
    add: (name, cb) => {
        var query = `insert into burgers(name,eaten) values(?,0);`
        con.query(query,[name],(err, data)=>{
            if(err) throw err;
            console.log(data)
            cb(data)
        })
    },
    update: (id, cb) => {
        var query = `update burgers set eaten = 1 where id = ?`;
        con.query(query, [id], (err, data)=>{
            if(err) throw err;
            console.log(data)
            cb(data)
        })
    }
}

module.exports = orm;

// orm.getAll();

// orm.add('sweet potato');