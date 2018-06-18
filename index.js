const fs = require("fs");
let quotes = JSON.parse(fs.readFileSync("quotes.json"));

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function homer() {
  return quotes[getRandomInt(0, quotes.length)];
}

console.log(homer());
