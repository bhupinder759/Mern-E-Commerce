require('dotenv').config();

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth/authRoute');
const adminProductsRouter = require('./routes/admin/products-routes.js');
const adminOrderRouter = require('./routes/admin/order-routes.js')
const shopProductsRouter = require('./routes/shop/products-routes.js');
const shopCartRouter = require('./routes/shop/cart-routes.js');
const shopAddressRouter = require('./routes/shop/address.routes.js');
const shopOrderRouter = require('./routes/shop/order-routes.js');
const shopSearchRouter = require('./routes/shop/search-route.js');

const commonFeatureRouter = require("./routes/common/feature-routes.js")
// Load environment variables from .env file

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: process.env.CLIENT_BASE_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cache-Control', 'Expires', 'Pragma'],
    credentials: true
}));

app.use(cookieParser());
app.use(express.json());

// Define a simple route
app.use('/api/auth', authRoute);
app.use('/api/admin/products', adminProductsRouter);
app.use('/api/admin/orders', adminOrderRouter);
app.use('/api/shop/products', shopProductsRouter);
app.use('/api/shop/cart', shopCartRouter);
app.use('/api/shop/address', shopAddressRouter);
app.use('/api/shop/order', shopOrderRouter);
app.use('/api/shop/search', shopSearchRouter);
app.use('/api/common/feature', commonFeatureRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})