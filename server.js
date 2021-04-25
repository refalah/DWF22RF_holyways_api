const express = require('express');
const { sequelize } = require('./models');
const routers = require('./src/routers');

const app = express();

const port = 5000;

app.use(express.json());
app.use('/api/v1', routers);

app.listen(port, () => {
    console.log(`Server up on ${port}`)
})