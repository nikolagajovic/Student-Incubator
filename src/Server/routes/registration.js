const express = require("express");
const { json } = require("stream/consumers");
const router = express.Router();
const pool = require("../config/dbconnection")
const queries = require("../queries/queries")
const jwtHelper = require("../utils/jwtHelper")


router.get("/fetch-data", async(req, res) => {
    
    try { 
        const { username, firstname, oib, gender, city, streetname, password, email, lastname, dateofbirth, country, postcode, streetnumber} = req.body;
        const postcodes = await pool.query(queries.getPostcodes);
        const sendPostcodes = postcodes.rows;


        const cities = await pool.query(queries.getCitiesByCountry, [1]);
        const sendCities = cities.rows;
        res.status(200).json({sendPostcodes, sendCities});


    } catch (e) {
        console.error(e.message);
        json.status(500).send("Server error.")
        
    }


});

router.post("/submit", async(req, res) => {
    let message = null;
    try {
        const { username, firstname, oib, gender, streetname, password, email, lastname, dateofbirth, country, postcode, streetnumber} = req.body;
        const checkUsername = await pool.query(queries.getAccInfoByUsername, [username]);
        if (checkUsername.rows.length > 0) {
            message = "User with that username already exists."
            return res.status(400).json({message});
        }

        const checkOib = await pool.query(queries.getUserByOib, [oib]);
        if (checkOib.rows.length > 0) {
            message = "User with that OIB already exists.";
            return res.status(400).json({message})
        }

        const accInfo = await pool.query(queries.addAccInfo, [username, password]);
        const accInfoId = accInfo.rows[0].id;

        const user = await pool.query(queries.addUser, [accInfoId, firstname, lastname, oib, dateofbirth, gender]);
        const userId = user.rows[0].id;
        console.log(userId);
        const city = 5
        const address = await pool.query(queries.addAddress, [userId, city, streetname, streetnumber]);
        console.log(address.rows[0])

        const contact = await pool.query(queries.addContact, ["E-mail", userId, email]);
        
        res.status(200).json(user.rows[0]);

    } catch (e)
     {
        console.error(e.message);
        message = "Server error.";
        res.status(500).json(message);  
    }


});

module.exports = router;