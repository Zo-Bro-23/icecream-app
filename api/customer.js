// var pgp = require('pg-promise')(/* options */)
// var db = pgp('postgres://postgres:schoolEarly@schoolarly-db-instance.ccdwvpne8jqy.us-east-2.rds.amazonaws.com:5432/zyi')
const db = require('./db')
function customer (req, resp){
    const { name, address, phone, whatsapp, gpay } = req.body
    if (req.method == 'POST'){
    db.one(`insert into customer(name, address, phone, whatsapp, gpay) values('${name}', '${address}', ${phone}, ${whatsapp}, ${gpay}) returning id;`)
     .then(function (r){
        resp.send(`{"status":"Success!", "id":${r.id}}`)
     })
}}
module.exports = customer