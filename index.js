const config = require('./config');
const dbctx = require('./contexts/sql'); // call required to start connection
const api = require('./api');

//

api.disable('etag');
api.listen(config.port, () => {
  console.log(`server started on port ${config.port} (${config.env})`);
});