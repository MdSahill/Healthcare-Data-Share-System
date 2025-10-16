// Simple placeholder server for IPFS interactions
const express = require('express');
const app = express();

app.get('/ping', (req, res) => res.json({ ok: true }));

const PORT = process.env.IPFS_PORT || 5002;
app.listen(PORT, () => {
  console.log('IPFS service stub listening on', PORT);
});
