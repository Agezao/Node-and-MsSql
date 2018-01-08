const sql = require('mssql');
const config = require('../config');

sql.connect(config.sqlconn).then(() => {
  return 'connected';
}).catch(err => {
  console.log('---- Error connecting to MSSql --');
  console.log(err);
});

sql.on('error', err => {
  console.log('---- MSSql Error --');
  console.log(err);
});

function exec(query) {
  return new sql.Request().query(query);
}

const dbctx = {
  exec: exec
}

module.exports = dbctx;