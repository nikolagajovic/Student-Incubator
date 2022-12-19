const express = require("express");
const router = express.Router();
const pool = require("../config/dbconnection")
const queries = require("../queries/queries")
const jwtHelper = require("../utils/jwtHelper")

router.post("/my-profile", async(req, res) => {

    try {
        const {token} = req.body;
        const decodedToken = jwtHelper.jwtDecode(token);
        const userId = decodedToken.user;

        const results = await pool.query(queries.);

    } catch (e) {
        console.error(e.message)
        res.status(500).json("Server error");
    }
});