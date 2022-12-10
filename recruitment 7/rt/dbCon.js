const db = new SQL.Database();
 
let fs = require("fs");
let initSqlJs = require("./sql-wasm.js");
let filebuffer = fs.readFileSync("/path/to/sample.sqlite");

initSqlJs().then(function (SQL) {
  // Create a new database with our existing sample.sqlite file
  const db = new SQL.Database(filebuffer);
});