const express = require("express");
const app = express();


app.use((req, res, next) => {
    console.log("Logger Middleware");
    next();
});


app.use((req, res, next) => {
    console.log("Second Middleware");
    next();
});


app.use((req, res, next) => {
    console.log("Third Middleware");
    next();
});


app.get("/home", (req, res) => {
    res.send("Home API");
});


app.get("/about", (req, res) => {
    res.send("About API");
});

app.listen(3000, () => {
    console.log("Server Started");
});