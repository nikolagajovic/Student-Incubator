const express = require("express");
const router = express.Router();
const pool = require("../config/dbconnection")
const queries = require("../queries/queries")

router.get("/projects", async (req, res) => {
    try {
        const results = await pool.query(queries.getAllProjects);
        const response = results.rows;
        res.json(response);
        
        
    } catch (er) {
        console.error(er.message);
        res.status(500).json("Server error")
    }
});

module.exports = router;