const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');

const app = express();
const port = 8000;

app.use(bodyParser.json());

let conn = null;

const initDbConnection = async () => {
  conn = await mysql.createConnection({
    host: 'localhost',
    port: 8821,
    user: 'root',
    password: 'root',
    database: 'webdb'
  });
};

// GET users
app.get('/users', async (req, res) => {
  const results = await conn.query('SELECT * FROM users');
  res.json(results[0]);
});

app.listen(port, async () => {
  await initDbConnection();
  console.log(`Server is running at http://localhost:${port}`);
});