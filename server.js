const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// create a new MySQL connection
const connection = mysql.createConnection({
  host: '127.0.0.1',
  port:'3306',
  user: 'root',
  password: '261754',
  database: 'testform'
});

// connect to the MySQL database
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
  } else {
    console.log('Connected to MySQL database!');
  }
});

app.use(bodyParser.json());
app.use(cors());
app.get("/sign-up", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
   });

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(express.json());



app.post('/sign-up', (req, res) => {
  const { name, phone, email, password } = req.body;

  const sql = 'INSERT INTO users (name, phone, email, password) VALUES (?, ?, ?, ?)';
  connection.query(sql, [name, phone, email, password], (error, results, fields) => {
    if (error) {
      console.error('Error signing up:', error); // Log the error to the console
      return res.status(500).send('Error signing up'); // Respond with a generic error message
    } else {
      console.log('User signed up successfully');
      return res.status(200).send('User signed up successfully');
    }
  });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// close the MySQL connection
// connection.end();