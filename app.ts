import express from 'express';
import getProductsRoutes from './routes/productsRotes';

const cors = require('cors')
const path = require('path');

const app = express();
const productsRouter = getProductsRoutes();

const middleWare = express.json();

app.use(middleWare);
app.use(cors());
app.use('/products', productsRouter);

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')));

  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

export default app;