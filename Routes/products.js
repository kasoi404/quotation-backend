const express = require('express');
const router = express.Router();

// ตัวอย่าง GET
router.get('/', (req, res) => {
  res.json({ message: 'Product list placeholder' });
});

module.exports = router;
