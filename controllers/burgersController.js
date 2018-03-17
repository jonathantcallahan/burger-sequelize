const Burgers = require('../models/burder');
const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Seamen42.',
    database: 'burger_db'
})

con.connect(() => console.log(`Connected on ${con.threadId}`));

module.exports = function(app) {
    app.get('/', (req,res)=>{
        Burgers.findAll({}).then((results)=>{
            console.log(results)
            res.render('index', {burger: results})
        })
        // con.query('select * from burgers', (err, result)=>{
        //     if(err) throw err;
        //     console.log(result)
        //     res.json(result)
        // })
})

    

app.post('/', (req, res)=>{
    // orm.add(req.body.name, (data)=>{
    //     console.log(data)
    //     res.end()
    // })
    Burgers.create({
        name: req.body.name,
        eaten: 0
    }).then(burger => {
        console.log(burger)
        res.end();
    });
})

 app.put('/:id', (req, res)=>{
//     console.log('got request')
//     var id = req.params.id;
//     orm.update(id, (data)=>{
//         console.log(data);
//         res.end();
//     })
    Burgers.update(
        {eaten: 1},
        {where: {id: req.params.id}}
    ).then(result => {
            console.log(result);
            res.end();
        }).catch(err => console.log(err))
    })
 }





