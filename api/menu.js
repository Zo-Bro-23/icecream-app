// var pgp = require('pg-promise')(/* options */)
// var db = pgp('postgres://postgres:schoolEarly@schoolarly-db-instance.ccdwvpne8jqy.us-east-2.rds.amazonaws.com:5432/zyi')
const db = require('./db')
function menu(req, resp){
    console.log('req ', req.query)
    db.any(`select * from menu where category = '${req.query.category}'`)
     .then(function (menu) {
        console.log('DATA:', menu)
        resp.send(menu)
    })
}

module.exports = menu