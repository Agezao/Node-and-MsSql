const express = require('express');
const responseFactory = require('../../factories/response.factory');
const UserBusiness = require('../../business/user.business');
//

const router = express.Router();
const _userBusiness = new UserBusiness();

// Routes under /users
router.route('/')
  .get((req, res) => {

    let skip, take;

    if(req.query.skip && req.query.take) {
      skip = req.query.skip;
      take = req.query.take;
    }

    _userBusiness.list(skip, take)
      .then(data => {
        res.json(responseFactory.success(data));
      })
      .catch(err => {
        res.json(responseFactory.fail(err));
      });
  })
  .post((req, res) => {
    // to-do, check body components (param validation)

    _userBusiness.create(req.body)
      .then(data => {
        res.json(responseFactory.success(data));
      })
      .catch(err => {
        res.json(responseFactory.fail(err));
      });
  });

// Routes under /users/:userId
router.route('/:userId')
  .get((req, res) => {

    _userBusiness.get(req.params.userId)
      .then(data => {
        res.json(responseFactory.success(data));
      })
      .catch(err => {
        res.json(responseFactory.fail(err));
      });
  })
  .put((req, res) => {

    // to-do, check body components (param validation)
    _userBusiness.update(req.params.userId, req.body)
      .then(data => {
        res.json(responseFactory.success(data));
      })
      .catch(err => {
        res.json(responseFactory.fail(err));
      });
  })
  .delete((req, res) => {

    // to-do, check body components (param validation)
    _userBusiness.remove(req.params.userId)
      .then(data => {
        res.json(responseFactory.success(data));
      })
      .catch(err => {
        res.json(responseFactory.fail(err));
      });
  });


module.exports = router;
