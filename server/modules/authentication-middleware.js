const rejectUnauthenticated = (req, res, next) => {
  // check if logged in
  if (req.isAuthenticated()) {
    next();
  } else {
    //////do redirect here
    res.sendStatus(403);
  }
};

module.exports = { rejectUnauthenticated };
