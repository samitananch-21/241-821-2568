const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 8000;

app.use(express.json());

let conn;


const initDbConnection = async () => {
  try {
    conn = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'webdb',
      port: 8821
    });
    console.log(' Connected to MySQL');
  } catch (error) {
    console.error(' DB connection failed:', error.message);
    process.exit(1);
  }
};


const validateUser = (user) => {
  const { firstname, lastname, age, gender } = user;

  if (!firstname || !lastname || !age || !gender) {
    return 'กรุณากรอกข้อมูลให้ครบ';
  }

  if (!['ชาย', 'หญิง', 'อื่น'].includes(gender)) {
    return 'gender ต้องเป็น ชาย, หญิง หรือ อื่น เท่านั้น';
  }

  return null;
};



//  POST - สร้าง user
app.post('/users', async (req, res) => {
  try {
    const user = req.body;

    const errorMsg = validateUser(user);
    if (errorMsg) {
      return res.status(400).json({ message: errorMsg });
    }

    const [results] = await conn.query(
      'INSERT INTO users SET ?',
      user
    );

    res.status(201).json({
      message: 'User created successfully',
      insertId: results.insertId
    });

  } catch (error) {
    res.status(500).json({
      message: 'Error creating user',
      error: error.message
    });
  }
});

//  GET - users ทั้งหมด
app.get('/users', async (req, res) => {
  try {
    const [results] = await conn.query('SELECT * FROM users');
    res.json(results);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching users',
      error: error.message
    });
  }
});

//  GET - user ตาม id
app.get('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const [results] = await conn.query(
      'SELECT * FROM users WHERE id = ?',
      [id]
    );

    if (results.length === 0) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    res.json(results[0]);

  } catch (error) {
    res.status(500).json({
      message: 'Error fetching user',
      error: error.message
    });
  }
});

//  PUT - แก้ไข user
app.put('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = req.body;

    const errorMsg = validateUser(updatedUser);
    if (errorMsg) {
      return res.status(400).json({ message: errorMsg });
    }

    const [results] = await conn.query(
      'UPDATE users SET ? WHERE id = ?',
      [updatedUser, id]
    );

    if (results.affectedRows === 0) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    res.json({
      message: 'User updated successfully'
    });

  } catch (error) {
    res.status(500).json({
      message: 'Error updating user',
      error: error.message
    });
  }
});

// ✅ DELETE - ลบ user
app.delete('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const [results] = await conn.query(
      'DELETE FROM users WHERE id = ?',
      [id]
    );

    if (results.affectedRows === 0) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    res.json({
      message: 'User deleted successfully'
    });

  } catch (error) {
    res.status(500).json({
      message: 'Error deleting user',
      error: error.message
    });
  }
});

// ================= START SERVER =================
app.listen(port, async () => {
  await initDbConnection();
  console.log(` Server running at http://localhost:${port}`);
});