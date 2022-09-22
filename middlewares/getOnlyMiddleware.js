const getOnlyMiddleware = (req, res, next) => {
  return req.method === 'GET' ? next() : res.sendStatus(403);
};

module.exports = getOnlyMiddleware;
