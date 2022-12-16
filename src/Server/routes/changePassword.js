const express = require("express");
const router = express.Router();
const pool = require("../config/dbconnection")
const queries = require("../queries/queries")
const jwtHelper = require("../utils/jwtHelper")


///TODO dobri statusi i dinamicki id za tokene!!!!
router.put("/change-password", async(req, res) => {
    let message = null;
    try {
        
        //fetching data from request body
        const {currentPassword, newPassword, token} = req.body;

        //decoding JWT token
        const decodedToken = jwtHelper.jwtDecode(token);
        const idUser = decodedToken.user;
       
        //selecting the correct user that is requesting password change
        const user = await pool.query(queries.getAccInfoById, [idUser]);

        //checking if the current password is correctly provided
        if (user.rows[0].password !== currentPassword) {
            message = "Current password isn't correct.";
            return res.status(401).json({message});
        }

        //ensuring that user doesn't provide password that is already in use
        if (newPassword === currentPassword) {
            message = "You have typed the same password.";
            return res.status(401).json({message});
        }

        //checking if user previously used that password
        if (newPassword === user.rows[0].oldpassword) {
            message = "You already have used that password before.";
            return res.status(401).json({message});
        }
        
        //updating user row in the table
        const alo = await pool.query(queries.updatePassword, [newPassword, currentPassword, idUser]);
        message = "Password changed successfully!";
        return res.status(200).json({message})
        
    } catch (e) {
        console.error(e.message);
        message = "Server error!";
        res.status(500).json({message});
    }
});

module.exports = router;