const express = require('express');
const app = express();
const ordersRouter = require('./routes/ordersRouter');
const productsRouter = require('./routes/productsRouter');
const errorHandler = require('./middlewares/errorHandler');

/* const myExpress = {
    json(){
        return function(req, res, next){
            // parsing
            req.body = []
            next()
        }
    }
}
 */

app.use(express.json());
app.use('/orders', ordersRouter);
app.use('/products', productsRouter);
app.use(errorHandler);

app.listen(6000);
