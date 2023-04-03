import express from 'express';
import getProductsRoutes from './routes/productsRotes';

const cors = require('cors')

const app = express();
const productsRouter = getProductsRoutes();

const middleWare = express.json();

app.use(middleWare);
app.use(cors());
app.use('/products', productsRouter);

export default app;