const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(bodyParser.json());


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




// PUT /users/:id สำหรับแก้ไขข้อมูล user ตาม id 
app.put('/users/:id', async (req, res) => {
    try {
        let updatedUser = req.body;
        const results =await conn.query('UPDATE users SET ? WHERE id = ?', [updatedUser, req.params.id]);
        if (results[0].affectedRows === 0) {
            throw { statusCode: 404, message: 'User not found'};
        }
        res.json({
            message: 'User updated successfully',
            data: results[0]
        });
    } catch (error) {
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: error.message || 'Error updating user',
            error: error.message
        });
    }
});