var express = require('express');
var router = express.Router();

router.get('/*', function(req, res, next) {
	res.render('error');
});

router.post('/*', function(req, res, next) {
	res.send(404);
});

module.exports = router;