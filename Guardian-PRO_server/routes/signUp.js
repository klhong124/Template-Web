var express = require('express');
var router = express.Router();
var { graphql } = require('graphql');
const schema = require('../graphql/schema');
const root = require('../graphql/resolver');

router.get('/', function(req, res, next) {
	var query = `
    query{
      allUsers {
        _id
        name
      }
    }
	`;
	graphql(schema, query, root).then((response) => {
		res.render('signUp', response.data);
	});
});

module.exports = router;
