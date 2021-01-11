var express = require('express');
var router = express.Router();

var {
  fizzBuzzService,
} = require('../controllers/fizzBuzz');

// get fizzbuzz page
router.post(
  '/',
  function (req, res, next) {
    console.log(req.body);
    const input = req.body.content;

    const arr = input.split(',');

    const output = fizzBuzzService(arr);

    res.render('fizzbuzz', {
      output: output,
    });
  }
);
module.exports = router;
