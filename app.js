const express = require('express');
const pool = require('./db.js');

const app = express();

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM players');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching data from database:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3030, () => {
  console.log('Server is running on port 3030');
});
