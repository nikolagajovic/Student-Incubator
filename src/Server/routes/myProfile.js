const express = require("express");
const router = express.Router();
const pool = require("../config/dbconnection")
const queries = require("../queries/queries")
const jwtHelper = require("../utils/jwtHelper")

router.post("/my-profile", async(req, res) => {

    try {
        const {token} = req.body;
        const decodedToken = jwtHelper.jwtDecode(token);
        const idUser = decodedToken.user;


        const results = await pool.query(queries.getFullMyProfile, [idUser]);
        for(const val of results.rows) {
            if (val.gender === 1) {
                val.gender = "Male";
            }
            else if (val.gender === 0) {
                val.gender = "Female";
            }
        }
        res.status(200).json(results.rows)

    } catch (e) {
        console.error(e.message)
        res.status(500).json("Server error");
    }
});


module.exports = router;