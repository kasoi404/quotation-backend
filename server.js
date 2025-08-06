const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const quotationRoutes = require('./routes/quotations');
const productRoutes = require('./routes/products');

app.use('/api/quotations', quotationRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => res.send('Quotation API is running'));
app.listen(port, () => console.log(`Server running on port ${port}`));