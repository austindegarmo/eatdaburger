var express = require("express");

var router = express.Router();

var burger = require(".../models/burger.js");

router.get("/", function(req, res) {
	cat.all(function(data) {
		var burObject = {
			burger: data
		};
		console.log(burObject);
		res.render("index", burObject)
	});
});