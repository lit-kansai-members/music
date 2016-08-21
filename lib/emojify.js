"use strict";

module.exports = function () {

  var REGEX = /(:\w+\:)/;
  var helpers = (function () {
    function helpers(els) {

    }

    var helpers = {
      normalize: function (args) {
        var message = [];
        for(var i = 0; i < args.length; i++) {
          message.push(args[i].toString());
        }
        if(message.length > 1){
          return message.join(' ');
        }
        return message.join();
      },
      parse: function(str){
        var out = [];
        var dump = str.split(REGEX);
        for(var i=0; i<dump.length;i++){
          if(this.isEmoji(dump[i])){
            out.push(this.emoji(dump[i]));
          } else {
            out.push(dump[i]);
          }
        }
        return out.join(' ');
      },
      isEmoji: function(type){
        return REGEX.test(type);
      },
      emoji: function(type){
        return require('node-emoji').get(type);
      }
    };

    return helpers;
  }());

  // normalize arguments
  var message = helpers.normalize(arguments);
  // parse message
  message = helpers.parse(message);
  // output
  console.log(message);

};

