const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

let conn = null;

// เชื่อมต่อ MySQL
const initMySQL = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8821
    });
};

// GET users ทั้งหมด
app.get('/users', async (req, res) => {
    const results = await conn.query('SELECT * FROM users');
    res.json(results[0]);
});

// GET user ตาม id
app.get('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        const results = await conn.query(
            'SELECT * FROM users WHERE id = ?',
            [userId]
        );

        if (results[0].length === 0) {
            throw { statusCode: 404, message: 'User not found' };
        }

        res.json(results[0][0]);

    } catch (error) {

        const statusCode = error.statusCode || 500;

        res.status(statusCode).json({
            message: error.message || 'Error fetching user'
        });
    }
});

// validate data
const validateData = (userData) => {

    let errors = [];

    if (!userData.firstname) {
        errors.push("กรุณากรอกชื่อ");
    }

    if (!userData.lastname) {
        errors.push("กรุณากรอกนามสกุล");
    }

    if (!userData.age) {
        errors.push("กรุณากรอกอายุ");
    }

    if (!userData.gender) {
        errors.push("กรุณาเลือกเพศ");
    }

    if (!userData.description) {
        errors.push("กรุณากรอกคำอธิบาย");
    }

    if (!userData.interests || userData.interests.length === 0) {
        errors.push("กรุณาเลือกความสนใจ");
    }

    return errors;
};

// POST สร้าง user
app.post('/users', async (req, res) => {

    try {

        let user = req.body;

        const errors = validateData(user);

        if (errors.length > 0) {
            throw {
                message: 'กรอกข้อมูลไม่ครบถ้วน',
                errors: errors
            };
        }

        const results = await conn.query(
            'INSERT INTO users SET ?',
            user
        );

        res.json({
            message: 'User created successfully',
            data: results[0]
        });

    } catch (error) {

        const errors = error.errors || [];

        res.status(400).json({
            message: error.message || 'Error creating user',
            errors: errors
        });
    }
});

// start server
app.listen(port, async () => {
    await initMySQL();
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