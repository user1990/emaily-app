module.exports = (req, res, next) => {
  // If is no user
  if (!req.user) {
    return res.status(401).send({
      error: 'You must log in'
    });
  }
  // If everything is good
  next();
};
