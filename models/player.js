var orm = require('../config/orm.js');

var player = {
    all: function(cb) {
        orm.all("players", function(res) {
            cb(res);
        });
    },
    create: function(vals, cb) {
        orm.create("players", vals, function(res) {
            cb(res);
        });
    },
    update: function(draftStatus, condition, cb) {
        orm.update("players", draftStatus, condition, function(res) {
            cb(res);
        });
    }, 
    delete: function(condition, cb) {
        orm.delete("players", condition, function(res) {
            cb(res);
        });
    },

    
};




module.exports = player;