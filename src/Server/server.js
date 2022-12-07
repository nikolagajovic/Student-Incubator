const express = require("express");
const app = express();
const cors = require("cors");
const loginRoute = require("../Server/routes/login")
const port = 4000;
//middleware


app.use(express.json()) //req.body
app.use(cors())

app.use("/home", loginRoute);



app.listen(port, () => console.log(`App listening on port ${port}`));