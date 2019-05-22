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
			_id
			name
			username
			password
		    gender
		    email
		    phone
		}
		}
		`;
		graphql(schema, query, root).then((response) => {
			res.render('profile', { login: true, user: response.data.user });
		});
	} else {
		res.redirect('/');
	}
});

module.exports = router;
