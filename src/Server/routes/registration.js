const express = require("express");
const { json } = require("stream/consumers");
const router = express.Router();
const pool = require("../config/dbconnection")
const queries = require("../queries/queries")
const jwtHelper = require("../utils/jwtHelper")


router.post("/fetch-data", async(req, res) => {
    
    try { 
        const { username, firstname, oib, gender, city, streetname, password, email, lastname, dateofbirth, country, postcode, streetnumber} = req.body;
        const postcodes = await pool.query(queries.getPostcodes);
        console.log(postcodes.rows);


        const cities = await pool.query(queries.getCitiesByCountry, [1]);
        console.log(cities.rows);
        res.status(200).json({postcodes, cities});


    } catch (e) {
        console.error(e.message);
        json.status(500).send("Server error.")
        
    }


});

router.post("/submit", async(req, res) => {
    let message = null;
    try {
        const { username, firstname, oib, gender, city, streetname, password, email, lastname, dateofbirth, country, postcode, streetnumber} = req.body;
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
        console.log(accInfo.rows[0]);
        res.status(200).json(accInfo.rows[0]);

    } catch (e)
     {
        console.error(e.message);
        message = "Server error.";
        res.status(500).json(message);  
    }


});

module.exports = router;