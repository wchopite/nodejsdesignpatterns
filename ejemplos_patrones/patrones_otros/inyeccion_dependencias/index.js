const express = require('express');
const axios = require('axios');
const { get } = require('./handlers');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', get(axios));

app.listen(port, () => console.log(`Example app listening on port ${port}`));
