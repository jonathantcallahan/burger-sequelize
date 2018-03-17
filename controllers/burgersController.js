const express = require('express');
const router = express.Router();
const orm = require('../config/orm');

router.get('/', (req,res)=>{
    orm.getAll((data)=>{
        const burgerObj = {
            burger: data
        }
        console.log(data)
        res.render('index', burgerObj)
    })
})

router.post('/', (req, res)=>{
    orm.add(req.body.name, (data)=>{
        console.log(data)
        res.end()
    })
})

router.put('/:id', (req, res)=>{
    console.log('got request')
    var id = req.params.id;
    orm.update(id, (data)=>{
        console.log(data);
        res.end();
    })
})

module.exports = router;

