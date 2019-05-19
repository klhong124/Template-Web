var express = require('express');
var router = express.Router();
var { graphql } = require('graphql');
const schema = require('../graphql/schema');
const root = require('../graphql/resolver');

router.get('/', function(req, res, next) {
	if (req.cookies.userID) {
		var query = `
		query{
		user (
			_id:"${req.cookies.userID}"
		){
			name
			username
			password
		}
		}
		`;
		graphql(schema, query, root).then((response) => {
			res.render('index', { login: true, user: response.data.user });
		});
	} else {
		res.render('index', { login: false });
	}
});

router.get('/signOut', function(req, res, next) {
	res.clearCookie('userID');
	res.redirect('/');
});

module.exports = router;
