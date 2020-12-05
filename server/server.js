const express = require('express');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');

//const weatherRouter = require('./routes/weatherRouter.js')
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cors jazz incase of issues
//this will allow specified localhosts to interact with local server!!!
// app.use((req,res, next)=>{
//   res.header('Access-Control-Allow-Origin',"*");
//   res.header('Access-Control-Allow-Credentials', "true");
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next()
// })
/* Routes */
//app.use('/api/weatherapp', variable for weather app);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;


/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on:${PORT}`);
});
