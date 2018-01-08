const express = require('express');
const dbctx = require('../../contexts/sql');
const responseFactory = require('../../factories/response.factory');
const ListBusiness = require('../../business/list.business');
//

const router = express.Router();
const _listBusiness = new ListBusiness();

// Routes under /lists
router.route('/')
  .get((req, res) => {

    let skip, take;

    if(req.query.skip && req.query.take) {
      skip = req.query.skip;
      take = req.query.take;
    }

    _listBusiness.list(skip, take)
      .then(data => {
        res.json(responseFactory.success(data));
      })
      .catch(err => {
        res.json(responseFactory.fail(err));
      });
  })
  .post((req, res) => {
    // to-do, check body components (param validation)

    _listBusiness.create(req.body)
      .then(data => {
        res.json(responseFactory.success(data));
      })
      .catch(err => {
        res.json(responseFactory.fail(err));
      });
  });

// Routes under /lists/:listId
router.route('/:listId')
  .get((req, res) => {

    _listBusiness.get(req.params.listId)
      .then(data => {
        res.json(responseFactory.success(data));
      })
      .catch(err => {
        res.json(responseFactory.fail(err));
      });
  })
  .put((req, res) => {

    // to-do, check body components (param validation)
    _listBusiness.update(req.params.listId, req.body)
      .then(data => {
        res.json(responseFactory.success(data));
      })
      .catch(err => {
        res.json(responseFactory.fail(err));
      });
  })
  .delete((req, res) => {

    // to-do, check body components (param validation)
    _listBusiness.remove(req.params.listId)
      .then(data => {
        res.json(responseFactory.success(data));
      })
      .catch(err => {
        res.json(responseFactory.fail(err));
      });
  });

module.exports = router;
