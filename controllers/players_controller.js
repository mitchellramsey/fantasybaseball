var express = require("express");

var router = express.Router();

//Import the model to use the database functions
var player = require("../models/player.js");


//Create all our routes and set up logic within those routes where required
router.get("/", function(req, res) {
    player.all(function(data) {
        var playerObject = {
            players: data
        }
        // console.log(playerObject);
        res.render("index", playerObject);
    });
});

router.post("/api/players", function(req,res) {
    var data = req.body;
    player.create([data.fName, data.lName, data.position, data.team], function(result) {
        res.json({id: result.insertId });
    });
});

router.put("/api/players/:id", function(req,res) {
    
    var condition = "id = " + req.params.id;
    var draftStatus = req.body.draftStatus;
    // console.log(draftStatus);
    
    player.update(draftStatus, condition, function(result) {
        if(result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/players/:id", function(req,res) {
    var condition = "id = " + req.params.id;

    player.delete(condition, function(result) {
        if(result.affectedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;

