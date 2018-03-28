# Fantasy Baseball Draft Tracker - Full Stack MySQL App

## Description

The Fantasy Baseball Draft Tracker app allows users to keep their draft big boards by adding players to the draft board. The players are placed into a MySQL database. The database is read and loaded onto the "Available to draft list" Players are then able to indicate if a player has been drafted to their team. Users can also return players back to the draft board. This process updates the "drafted" column in the MySQL database. Users can also indicate if a player has been drafted by another team which deletes the player from the database.

A few things that I would like to update with this in the future. I would like to have an API loaded into MySQL which will allievate the user to create every single player. I would also like to create a "reset" button which would reset the database back to its beginning values. These updates may happen when I update the app with the use of sequelize.

## Heroku Demo

The app is currently deployed on Heroku. Please check it out at: https://nameless-gorge-13839.herokuapp.com/

## Technologies Used

Bootstrap, Handlebars.js, Javascript, jQuery, node.js, express.js, MySQL, and NPM: body-parser

