// Placeholder auth middleware
module.exports = (req, res, next) => {
  // In real app validate JWT or wallet signature
  req.user = { address: '0x0' };
  next();
};
