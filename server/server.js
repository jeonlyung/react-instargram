const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

//PORT 설정
const PORT = process.env.PORT || 5000;

//Mongo DB 설정
const config = require("./config/key");
const mongoose = require('mongoose');
const connect = mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected...!!'))
  .catch(err => console.log(err));

// Middleware
app.use(cors());
app.use(express.json());


//RequestMapping URL Mapping
app.use('/api/users', require('./routes/users'));


// Serve static files from the React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

// API routes
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

// Add more API routes here

// Catch-all handler for client-side routing in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});