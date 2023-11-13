const connectDB = require('./db/connect');
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const userRoute = require('./api/routes/user');
const doctorRoute = require('./api/routes/doctor');
const resetRoute = require('./api/routes/reset');
const dotenv = require('dotenv');
const cors = require('cors');

// Connect DataBase
connectDB();

app.use(cors());
const allowedOrigins = ['http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:3000', 'http://127.0.0.1:5500', 'deployed link'];

// CORS configuration middleware
app.use(
  cors({
    origin: (origin, callback) => {
      // Check if the origin is allowed, or if it is undefined (e.g., direct API requests)
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  })
);

// Add a middleware to set the "Access-Control-Allow-Origin" header for all responses
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  // Set other CORS headers here if needed
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config({ path: '.env' });

// Routes Call
app.use(userRoute);
app.use(doctorRoute);
app.use(resetRoute);

app.listen(port, () => {
  console.log(`Backend server is listening on port ${port}`);
});
