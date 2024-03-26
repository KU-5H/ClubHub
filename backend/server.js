const express = require('express');
const app = express();
app.get("/message", (_, res) => res.send("Hello from express!"));


let tempV = ['d','c','b','a']

app.get('/test', (req, res) => {
    res.json(tempV)
})

app.listen(5000, () => console.log("Server is listening..."));