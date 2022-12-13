const express = require("express");
const router = express.Router();
const pool = require("../config/dbconnection")
const queries = require("../queries/queries")
const jwtHelper = require("../utils/jwtHelper")

router.post("/my-projects", async(req, res) => {
    let message = null;
    
    try {
    const { token } = req.body;

    //decoding JWT token
    const decodedToken = jwtHelper.jwtDecode(token);
    const idUser = decodedToken.user;


    //getting all projects that user is participating in.
    const projects = await pool.query(queries.getAllProjectsByUser, [idUser]);
    if (projects.rows.length === 0) {
        message = "User isn't assigned to any project."
        return res.status(404).json({ message });
    }
    message = "User has been assigned to following projects."
    res.status(200).json(projects.rows)

    } catch (e) {
        console.error(e.message);
        res.status(500).json("Server error")
        
    }

  

 });

 module.exports = router;