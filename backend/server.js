require('dotenv').config();

const express = require('express');
const app = express();
app.get("/message", (_, res) => res.send("Hello from express!"));

let tempV = "nahh hello"

app.get('/test', (req, res) => {
    res.json(tempV)
})


app.listen(process.env.PORT, () => console.log("Server is listening..."));