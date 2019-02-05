const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const chalk = require('chalk')
const cowsay = require('cowsay')
const cows = require("./cows.js")

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

require("./config/session.js")(app)

var routes_setter = require('./config/routes.js');//this part will be determined by where we put our routes file.
routes_setter(app);//then actually call the function we put in our routes file and pass the app as the argument


app.listen(port, function () {
    console.clear()
    console.log(chalk.magenta(cowsay.say({
        text: `server now listening on port ${port}`,
        f: cows[Math.floor(Math.random() * cows.length)].animal
    })));
});