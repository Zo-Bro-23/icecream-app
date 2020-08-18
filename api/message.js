const db = require('./db')
function message(req, resp){
     if (req.method == 'GET'){
         db.any(`select client, host, timestamp from message where id = ${req.query.id};`)
          .then((r) => 
            resp.send(r.map((o) => 
                o.timestamp.getTime())[0] > req.query.time ? r[0]
                    :"nothing"))
          
    }
}

module.exports = message