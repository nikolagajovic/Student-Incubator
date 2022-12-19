const express = require("express");
const { json } = require("stream/consumers");
const router = express.Router();
const pool = require("../config/dbconnection")
const queries = require("../queries/queries")
const jwtHelper = require("../utils/jwtHelper")


router.get("/fetch-data", async(req, res) => {

    try { 
        const postcodes = await pool.query(queries.getPostcodes);
        const sendPostcodes = postcodes.rows;


        const cities = await pool.query(queries.getCitiesByCountry, [1]);
        const sendCities = cities.rows;
        res.status(200).json({sendPostcodes, sendCities});


    } catch (e) {
        console.error(e.message);
        res.status(500).json("Server error.")

        
    }


});

router.post("/submit", async(req, res) => {
    let message = null;
    try {
        //fetching data from request body
        const { username, firstname, oib, gender, streetname, city, password, email, lastname, dateofbirth, country, postcode, streetnumber} = req.body;

        //checking if username already exists
        const checkUsername = await pool.query(queries.getAccInfoByUsername, [username]);
        if (checkUsername.rows.length > 0) {
            message = "User with that username already exists."
            return res.status(400).json({message});
        }
//checking if OIB already exists

        //checking if OIB already exists
        const checkOib = await pool.query(queries.getUserByOib, [oib]);
        if (checkOib.rows.length > 0) {
            message = "User with that OIB already exists.";
            return res.status(400).json({message})
        }

        //inserting data into accountinfo table
        const accInfo = await pool.query(queries.addAccInfo, [username, password]);
        const accInfoId = accInfo.rows[0].id;

        //inserting data into users table
        const user = await pool.query(queries.addUser, [accInfoId, firstname, lastname, oib, dateofbirth, gender]);
        const userId = user.rows[0].id;

        //select the correct cityid by City name value in request body.
        const resultCity = await pool.query(queries.getCityByName, [city]);
        const cityId = resultCity.rows[0].id;

        //inserting data into address table
        const address = await pool.query(queries.addAddress, [userId, cityId, streetname, streetnumber]);
        console.log(address.rows[0])


        

        //inserting data into contactinfo table
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