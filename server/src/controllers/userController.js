const pool = require("../config/dbConfig");

// Register a new user
exports.addUser = async (req, res) => {
    const { name, username, email, phone } = req.body;
    try {
        const { rows } = await pool.query(
            'INSERT INTO users (name, username, email, phone) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, username, email, phone]
        );
        res.status(201).json(rows[0]);
    } catch (err) {
        console.error('Error adding user:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.getUsers = async (req, res) =>{
    try {
        const { rows } = await pool.query('SELECT * FROM users ORDER BY id ASC');
        res.json(rows);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ message: 'Internal server error' });
    }

}

exports.updateUser = async (req, res) => {
    const id = req.params.id;
    const { name, username, email, phone } = req.body;
    try {
        const { rows } = await pool.query(
            'UPDATE users SET name=$1, username=$2, email=$3, phone=$4 WHERE id=$5 RETURNING *',
            [name, username, email, phone, id]
        );
        res.json(rows[0]);
    } catch (err) {
        console.error('Error updating user:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
        await pool.query('DELETE FROM users WHERE id=$1', [id]);
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        console.error('Error deleting user:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        if (rows.length === 0) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.json(rows[0]);
        }
    } catch (err) {
        console.error('Error fetching user by ID:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};