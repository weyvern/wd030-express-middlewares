const express = require('express');

const ordersRouter = express.Router();

ordersRouter.get('/', (req, res, next) => {
  res.json([
    { id: 1, client: 'Summer' },
    { id: 2, client: 'Benedikt' },
    { id: 3, client: 'Rebeca' }
  ]);
});

module.exports = ordersRouter;
