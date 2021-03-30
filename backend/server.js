require('dotenv').config({ path: './app/config/.env' });
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const categories = require('./app/routers/category.router');

const app = express();
// middlewers
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// use userRouter
app.use('/', categories);

const connection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
    });
    console.log('connected to database');
  } catch (err) {
    console.log(err);
  }
};
connection();

// port
const PORT = process.env.PORT;

// start server
app.listen(PORT, () => {
  console.log(`server runing at ${PORT}`);
});
