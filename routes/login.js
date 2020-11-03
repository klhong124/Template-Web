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
      user (
          username:"${req.body.username}"
      ){
        _id
        username
        password
      }
    }
	`;
	graphql(schema, query, root).then((response) => {
		if (response.data.user) {
			res.cookie('userID', response.data.user._id);
			res.redirect('/');
		} else {
			res.render('login', { error: true });
		}
	});
});

module.exports = router;
