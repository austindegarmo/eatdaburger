var express = require("express");

var router = express.Router();

var burger = require(".../models/burger.js");

router.get("/", function(req, res) {
	burger.all(function(data) {
		var burObject = {
			burger: data
		};
		console.log(burObject);
		res.render("index", burObject);
	});
});

router.post("/", function(req, res) {
  burger.create([
    "name", "eaten"
  ], [
    req.body.name, req.body.eaten
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  cat.update({
    eaten: req.body.eaten
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:burger_name", function(req, res){
	var condition = "burger_name = " + req.params.burger_name;

	burger.delete(condition, function() {
		res.redirect("/");
	})

})