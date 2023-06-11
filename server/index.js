const connectDB = require('../server/mongodb/connect');
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const userRoute = require('../server/routes/user');
const doctorRoute = require('../server/routes/doctor');
const dotenv = require('dotenv');
const cors = require('cors');

// Connect DataBase
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config({ path: '.env' });

// Routes Call
app.use(userRoute);
app.use(doctorRoute);

app.listen(port, () => {
  console.log(`Backend server is listening on port ${port}`);
});
