// dependencies
var express = require("express");
var path = require("path");
var fs = require("fs");
var database = require("./db/db.json")
const { v4: uuidv4 } = require('uuid');

// set up express
var app = express();
var PORT = process.env.PORT || 3000;