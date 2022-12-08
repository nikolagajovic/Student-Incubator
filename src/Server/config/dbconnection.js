const Pool = require('pg').Pool

const pool = new Pool({
    user: "admin",
    password: "kojan123",
    host: "localhost",
    port: 5432,
    database: "studentski_inkubator"
});

module.exports = pool;