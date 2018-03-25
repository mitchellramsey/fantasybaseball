var express = require('express');
var bodyParser = require('body-parser');


var port = process.env.port || 8080;

var app = express();

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/players_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(port, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + port);
});