const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const weatherRouter = require('./routes/weather.router.js')
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req,res, next)=>{
  res.header('Access-Control-Allow-Origin',"*");
  res.header('Access-Control-Allow-Credentials', "true");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next()
})

/* Routes */
app.use('/api/weather', weatherRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;


/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on:${PORT}`);
});
