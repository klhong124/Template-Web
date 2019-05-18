var express = require('express');
var router = express.Router();
var { graphql } = require('graphql');
const schema = require('../graphql/schema');
const root = require('../graphql/resolver');

graphql(schema, '{ users{id} }', root).then((response) => {
	console.log(response.data.users[1]);
});

router.get('/', function(req, res, next) {
	res.render('index', { page: 'Home', menuId: 'home' });
});

module.exports = router;
