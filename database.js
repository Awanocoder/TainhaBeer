const pg = require('pg')

const database = new pg.Client('postgres://cdjsvpwc:Yq364JxPRZmTEVFaePHw1MZbYLOgAWEY@isabelle.db.elephantsql.com/cdjsvpwc')

database.connect((erro) => {
    if (erro) return console.log('Erro na conexão com o DB', erro)
    return console.log('Conectado ao DB!')
})

module.exports = database