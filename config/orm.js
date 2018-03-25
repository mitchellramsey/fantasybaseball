//Import the MySQL connection
var connection = require("../config/connection.js");

var orm = {
    all: function(table, cb) {
        var query = "SELECT * FROM " + table + ";";
        connection.query(query, function(err, res) {
            if(err) {
                 throw err;
            }
            cb(res);

        });
    },

    create: function(table, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (firstName, lastName, position, team) ";
        queryString += "VALUES (?, ?, ?, ?)";

        connection.query(queryString, vals, function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
        });
    },

    update: function(table, draftStatus, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET drafted = " + draftStatus;
        queryString += " WHERE " + condition;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }

            cb(result);
        });
    },

    delete: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;

        queryString += " WHERE " + condition;

        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }

            cb(result);
        });
    },




}



module.exports = orm;

