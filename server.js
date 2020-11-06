require("dotenv").config();
const express = require("express");
const app = express();
let bodyParser = require("body-parser");
var cors = require("cors");
const port = process.env.port;

app.use(cors());

//Support parsing of application/json type post data
app.use(bodyParser.json());

//Support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

require(`${__dirname}/app/routes`)(app);

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
