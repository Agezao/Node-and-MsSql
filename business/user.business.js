const dbctx = require('../contexts/sql');
const BaseBusiness = require('./base.business');

class UserBusiness extends BaseBusiness {

  constructor() {
    super('Users');
  }

  create(vm) {
    let query = `insert into Users values ('${vm.email}', '${vm.name}', '${vm.password}')`;

    return dbctx.exec(query)
      .then(data => {
        return data;
      });
  }

  update(id, vm) {
    let query = 'update Users set ';

    query += `name = '${vm.name}'`;

    query += `where id = '${id}'`;

    return dbctx.exec(query)
      .then(data => {
        return data;
      });
  }
}

module.exports = UserBusiness;