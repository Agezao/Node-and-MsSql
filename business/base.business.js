const dbctx = require('../contexts/sql');

class BaseBusiness {

  constructor(dbObj) {
    this.obj = dbObj;
  }

  get(id) {
    
    return dbctx.exec(`select * from ${this.obj} where id = ${id}`)
      .then(data => {
        return data.recordset;
      });
  }

  remove(id) {
    
    return dbctx.exec(`delete ${this.obj} where id = ${id}`)
      .then(data => {
        return data;
      });
  }

  list(skip, take) {
    let query = `select * from ${this.obj}`;

    if(skip && take) {
      query += ' ORDER BY CURRENT_TIMESTAMP';
      query += ` OFFSET     ${skip} ROWS `; // skip
      query += ` FETCH NEXT ${take} ROWS ONLY`; // take
    }

    return dbctx.exec(query)
      .then(data => {
        return data.recordset;
      });
  }
}

module.exports = BaseBusiness;