const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const requestLogger = require('./utilities/RequestLogger');
const errorLogger = require('./utilities/ErrorLogger');
const userRouter = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use("/uploads", express.static('uploads'));

app.use(requestLogger);
app.use('/', userRouter);
app.use(errorLogger);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
