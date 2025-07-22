const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
// const mongoSanitize = require('express-mongo-sanitize');
const { rateLimit } = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');



const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 2000, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	
});

//Security Middleware
app.use(limiter)
app.use(express.json())
app.use(cookieParser())
app.use(cors())
// app.use(mongoSanitize())
app.use(helmet())
app.use(hpp())




//Routes
const userRoutes = require("./src/routes/User.routes");






app.use('/api/v1', userRoutes);







app.get('/', (req, res) => {
  res.send('Hello World!')
})


module.exports = app;
