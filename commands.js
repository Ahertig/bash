var fs = require('fs');
var request = require('request');

module.exports = {
  pwd: function(done, givePrompt) {
    var output = process.argv[1] + "\n";
    done(output);
    givePrompt();
  },
  date: function(done, givePrompt) {
    var output = new Date() + "\n";
    done(output);
    givePrompt();
  },
  ls: function(done, givePrompt) {
    var output = "";
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        output += file.toString() + "\n";
      })
      done(output);
      givePrompt();
    });
  }, 
  echo: function(thingToEcho, done, givePrompt) {
    var output = thingToEcho + "\n";
    done(output);
    givePrompt();
  },
  cat: function(fileName, done, givePrompt) {
    var output = ""
    fs.readFile(fileName, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      output += data + "\n";
      done(output)
      givePrompt();
    });
  },
  head: function(fileName, done, givePrompt) {
    fs.readFile(fileName, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }

      var arr = data.split("\n").slice(0,5);
      done(arr.join("\n"))

      givePrompt();
    });
  },
  tail: function(fileName, done, givePrompt) {
    fs.readFile(fileName, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      var arr = data.split("\n").slice(-5);
      done(arr.join("\n"))

      givePrompt();
    });
  },
  sortIt: function(fileName, done, givePrompt) {
    fs.readFile(fileName, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      var arr = data.split("\n");

      done(arr.sort().join("\n"))

      givePrompt();
    });
  },
  wc: function(fileName, done, givePrompt) {
    fs.readFile(fileName, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      var arr = data.split("\n");

      done(arr.length)

      givePrompt();
    });
  },
  uniq: function(fileName, done, givePrompt) {
    fs.readFile(fileName, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      var arr = data.split("\n").sort();
      var newArr = [];

      arr.forEach(function(elem) {
        if (newArr.indexOf(elem) < 0) {
          newArr.push(elem);
        }
      });
      console.log(newArr);
      done(newArr);
      givePrompt();
    });
  },
  curl: function(website, done, givePrompt) {
    request("http://" + website, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          done(body); // Show the HTML for the Google homepage.
        }
        givePrompt();
    });
  }
}




