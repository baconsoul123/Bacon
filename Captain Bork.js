{"name": "Captain Bork", "channel_id": "273910275491495937", "token": "a24OFe8A1QR6y1uXNHEzQayJxP2QbtOuU3h_x9DxJlEpQOLQFYeSdpV6ZrReBprUaK4M", "avatar": "b9c89d94e81fec3b92497e529e66c03e", "guild_id": "213465146503331840", "id": "273912303013855233"}
var env = require('../config.json'),
    Help = require('./Help.js'),
    Imgur = require('./Imgur.js'),
    Giphy = require('./Giphy.js'),
    Urban = require('./Urban.js');

var InsomBot = function () {
    this.keywords = env.keywords;
    this.Help = new Help;
    this.Imgur = new Imgur;
    this.Giphy = new Giphy;
    this.Urban = new Urban;
};

InsomBot.prototype.loadKeywords = function ()
{
    var result = [];
    for (var i in this.keywords) {
        if (this.keywords.hasOwnProperty(i)) {
            result.push(this.keywords[i]);
        }
    }
    return result;
}

InsomBot.prototype.checkMessageForKeywords = function(message, triggers, callback)
{
    for(var i = 0; i != triggers.length; i++) {
        var substring = triggers[i];
        if (message.indexOf(substring) == 0) {
            return callback(substring);
        }
    }
    return callback(0);
}

InsomBot.prototype.getKeyByValue = function(object, value)
{
    for(var prop in object) {
        if(object.hasOwnProperty(prop)) {
            if(object[prop] == value)
                return prop;
        }
    }
}

InsomBot.prototype.runKeywordFunction = function(keywordFunction, keyword, message, callback)
{
    this[keywordFunction].Message(keyword, message, callback);
}

module.exports = InsomBot;
