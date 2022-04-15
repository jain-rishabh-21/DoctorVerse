const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = 4000;

//start the server on port 4000
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
