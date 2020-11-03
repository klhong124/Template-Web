var express = require('express');
var router = express.Router();
var { graphql } = require('graphql');
const schema = require('../graphql/schema');
const root = require('../graphql/resolver');

router.get('/customer', function(req, res, next) {
	var query = `
    query{
    allCustomers{
        _id
        name
        company
        gender
        email
        phone
    }
}
    `;
	graphql(schema, query, root).then((response) => {
		res.send(response.data);
	});
});

module.exports = router;
