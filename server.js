'use strict';

const express = require('express');
const app = express();
// const compression = require("compression");
const PORT = process.env.PORT || 3000;

// app.use(compression({filter: shouldCompress}))

// function shouldCompress (req, res) {
//     if (req.headers['x-no-compression']) {
//         return false
//     }
//     return compression.filter(req, res)
// }

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

