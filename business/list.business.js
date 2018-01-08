const dbctx = require('../contexts/sql');
const BaseBusiness = require('./base.business');

class ListBusiness extends BaseBusiness {

  constructor() {
    super('Lists');
  }

  create(vm) {
    let query = `insert into Lists values ('${vm.filename}', '${vm.description}', ${vm.userId})`;

    return dbctx.exec(query)
      .then(data => {
        return data;
      });
  }

  update(id, vm) {
    let query = 'update Lists set ';

    query += `description = '${vm.description}'`;
    query += `where id = '${id}'`;

    return dbctx.exec(query)
      .then(data => {
        return data;
      });
  }
}

module.exports = ListBusiness;