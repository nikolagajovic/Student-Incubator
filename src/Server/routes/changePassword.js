const express = require("express");
const router = express.Router();
const pool = require("../config/dbconnection")
const queries = require("../queries/queries")

router.put("/change-password", async(req, res) => {
    try {
        
        const {currentPassword, newPassword} = req.body;
        const user = await pool.query("SELECT * FROM accountinfo WHERE id = 1");
        console.log(user.rows[0].oldpassword)

        if (user.rows[0].password !== currentPassword) {
            return res.json("Current password isn't correct.")
        }

        if (newPassword === currentPassword) {
            return res.json("You have typed the same password.")
        }

        if (newPassword === user.rows[0].oldpassword) {
            return res.json("You already have used that password before.")
        }
        
        const message = await pool.query("UPDATE accountinfo SET password = $1, oldpassword = $2 WHERE id = 1", [newPassword, currentPassword]);
        console.log(message)
        res.json("Password changed successfully!")
        
    } catch (e) {
        console.error(e.message);
        res.status(500).json("Server error!");
    }
});

module.exports = router;