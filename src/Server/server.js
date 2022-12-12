const express = require("express");
const app = express();
const cors = require("cors");
const loginRoute = require("../Server/routes/login")
const projectsRoute = require("../Server/routes/projects")
const changePasswordRoute = require("../Server/routes/changePassword")
const myProjects = require("../Server/routes/myProjects")
const port = 5000;
//middleware


app.use(express.json()) //req.body
app.use(cors())

app.use("/home", loginRoute);
app.use("/home", projectsRoute);
app.use("/home", changePasswordRoute);
app.use("/home", myProjects);



app.listen(port, () => console.log(`App listening on port ${port}`));