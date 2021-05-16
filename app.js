const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRouter = require('./router/productRouter');

const { errorHandler } = require("./middleware/error-handler");
const { routeNotFound } =  require("./middleware/route-not-found");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req, res) => {
    res.send("hellow");
})
app.use('/products', productRouter);

app.use(routeNotFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    
    console.log("server started on Port:", PORT);
})