const tellMeEverythingWillBeAlright = (req, res, next) => {
  console.log('Hey you! Everything will be alright!');
  next();
};

module.exports = tellMeEverythingWillBeAlright;
