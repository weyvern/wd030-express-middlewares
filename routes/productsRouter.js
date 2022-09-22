const express = require('express');
const tellMeEverythingWillBeAlright = require('../middlewares/tellMeEverythingWillBeAlright');

const productsRouter = express.Router();

productsRouter.use(tellMeEverythingWillBeAlright);

productsRouter
  .route('/')
  .get((req, res) => {
    res.json([
      { id: 1, name: 'Mac Mini' },
      { id: 2, name: 'MX Master 3 ' }
    ]);
  })
  .post((req, res) => {
    res.status(201).json({ success: 'New product created' });
  });

module.exports = productsRouter;
