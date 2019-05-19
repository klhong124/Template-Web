var express = require('express');
var router = express.Router();
var { graphql } = require('graphql');
const schema = require('../graphql/schema');
const root = require('../graphql/resolver');

router.get('/', function(req, res, next) {
	res.render('login', { error: null });
});

router.post('/', function(req, res, next) {
	var query = `
    query{
      users (
          username:"${req.body.username}"
      ){
        _id
        username
        password
      }
    }
	`;
	graphql(schema, query, root).then((response) => {
		if (response.data.users.length) {
			res.cookie('userID', response.data.users[0]._id);
			res.redirect('/');
		} else {
			res.render('login', { error: true });
		}
	});
});

module.exports = router;
