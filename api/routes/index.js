const express = require('express');
const UsersRoutes = require('./users.route');
const ListsRoutes = require('./lists.route');

//

const router = express.Router();

// Routes under /users
router.use('/users', UsersRoutes);

// Routes under /listas
router.use('/lists', ListsRoutes);

module.exports = router;
