import express from 'express';
import getProductsRoutes from './routes/products';
import authRoutes from './routes/auth';

const cors = require('cors')

const app = express();
const productsRouter = getProductsRoutes();
const auth = authRoutes();

const middleWare = express.json();

app.use(middleWare);
app.use(cors());
app.use('/products', productsRouter);
app.use('/auth', auth);

export default app;