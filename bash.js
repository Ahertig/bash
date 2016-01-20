'use strict';

var commands = require('./commands.js');

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
  var cmd = data.toString().trim(); // remove the newline
  var firstArg = cmd.split(" ")[0];
  var remaining = cmd.split(" ").slice(1);

  if (cmd === "pwd") {
    commands.pwd(done, givePrompt);
  } else if (cmd === "date") {
    commands.date(done, givePrompt);
  } else if (cmd === "ls") {
    commands.ls(done, givePrompt);
  } else if (firstArg === "echo") {
    commands.echo(remaining, done, givePrompt);
  } else if (firstArg === "cat") {
    commands.cat(remaining, done, givePrompt);
  } else if (firstArg === "head") {
    commands.head(remaining, done, givePrompt);
  } else if (firstArg === "tail") {
    commands.tail(remaining, done, givePrompt);
  } else if (firstArg === "sort") {
    commands.sortIt(remaining, done, givePrompt);
  } else if (firstArg === "wc") {
    commands.wc(remaining, done, givePrompt);
  } else if (firstArg === "uniq") {
    commands.uniq(remaining, done, givePrompt);
  } else if (firstArg === "curl") {
    commands.curl(remaining, done, givePrompt);
  }

});

function done(output) {
  process.stdout.write(output);
}

function givePrompt() {
  process.stdout.write("\nprompt > ");
}
