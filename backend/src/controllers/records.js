const express = require('express');
const router = express.Router();

// Placeholder controller - replace with real logic and services
router.get('/', async (req, res) => {
  res.json({ message: 'List records (not implemented)' });
});

router.post('/', async (req, res) => {
  // expected: { ipfsHash, metadata }
  res.json({ message: 'Add record (not implemented)', body: req.body });
});

module.exports = router;
