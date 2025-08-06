const express = require('express');
const router = express.Router();
const db = require('../models/db');

router.get('/', async (req, res) => {
    const [rows] = await db.query('SELECT * FROM quotations');
    res.json(rows);
});

router.post('/', async (req, res) => {
    const { customer_id, date, total, vat } = req.body;
    const [result] = await db.query('INSERT INTO quotations (customer_id, date, total, vat) VALUES (?, ?, ?, ?)',
        [customer_id, date, total, vat]);
    res.json({ id: result.insertId });
});

module.exports = router;