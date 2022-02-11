const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 4000;

//start the server on port 4000
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
