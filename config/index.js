let env = process.env.NODE_ENV || 'dev';

const config = {
  env: env,
  secret: 'b15ab3ab-5fc8-4c7f-a44d-63c9d266c2c9',
  port: 4456,
  sqlconn: {
    user: 'admin',
    password: 'local-pass',
    server: 'local-machine',
    database: 'nodedb',
    dialect: "mssql"
  }
};

module.exports = Object.assign({}, config);