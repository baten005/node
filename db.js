const { Pool } = require('pg');

const pool = new Pool({
  host: 'dpg-cp3q9f7sc6pc73fu2n8g-a.oregon-postgres.render.com',
  port: 5432,
  database: 'cpl_pstu',
  user: 'cpl_pstu',
  password: 'XkcTPal2nF9DNm8G1UJKnlv4dhxlwg1U',
  ssl: {
    rejectUnauthorized: false
  }
});

pool.on('connect', () => {
  console.log('Database connection established successfully.');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;
