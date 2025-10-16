const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.json({ message: 'List access requests (not implemented)' });
});

router.post('/', async (req, res) => {
  res.json({ message: 'Request access (not implemented)', body: req.body });
});

module.exports = router;
