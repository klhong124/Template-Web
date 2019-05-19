var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if (req.cookies.userID) {
		console.log(`User : ${req.cookies.userID} LOGIN`);
		res.render('index', { userID: req.cookies.userID });
	} else {
		res.render('index', { userID: false });
	}
});

module.exports = router;
