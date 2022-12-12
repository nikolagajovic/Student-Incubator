const express = require("express");
const router = express.Router();
const pool = require("../config/dbconnection")
const queries = require("../queries/queries")

router.post("/my-projects", async(req, res) => {
    let message = null;
    
    try {
    const { token } = req.body;
    //decoding JWT token
    //const stringToken = token.toString();
   // const base64Url = stringToken.split('.')[1];
    //const decodedValue = JSON.parse(Buffer.from(base64Url, 'base64'));

    const idUser = 5;

    const projects = await pool.query(queries.getAllProjectsByUser, [idUser]);
    if (projects.rows.length === 0) {
        message = "User isn't assigned to any project."
        return res.status(404).json({ message });
    }
    const projectsList = projects.rows;
    message = "User has been assigned to following projects."
    res.status(200).json({message, projectsList})

    } catch (e) {
        console.error(e.message);
        res.status(500).json("Server error")
        
    }

  

 });

 module.exports = router;