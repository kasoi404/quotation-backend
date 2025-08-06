const express = require('express');
const router = express.Router();
const db = require('../models/db');

router.get('/', async (req, res) => {
    const [rows] = await db.query('SELECT * FROM products');
    res.json(rows);
});

module.exports = router;