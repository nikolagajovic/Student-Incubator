const express = require("express");
const router = express.Router();
const pool = require("../config/dbconnection")
const jwtGenerator = require("../utils/jwtGenerator")


router.post("/login", async(req, res) => {
    let message = null;
    try {
        //1. destructure req.body
        const {username, password} = req.body;
        
        //2. check if user doesnt exist
        const user = await pool.query("SELECT * FROM accountinfo WHERE username = $1", [username]);

        if (user.rows.length === 0) {
            message = "There is no user with such username."
            return res.status(401).json({message});
        }

        //3. check if incoming password is correct
        const validPassword = user.rows[0].password === password;
        if (!validPassword) {
            message = "Incorrect password.";
            return res.status(401).json({message});
        }

        //4. generate the jwt token
        const token = jwtGenerator(user.rows[0].id);

        res.status(200).json({username, password, token});

    } catch(err) {
        console.error(err.message);
        message = "Server error";
        res.status(500).json({message});
    }
});

module.exports = router