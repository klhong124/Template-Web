var express = require('express');
var router = express.Router();
var { graphql } = require('graphql');
const schema = require('../graphql/schema');
const root = require('../graphql/resolver');

router.get('/', function(req, res, next) {
	var query = `
    query{
      allUsers {
        username
      }
    }
	`;
	graphql(schema, query, root).then((response) => {
		res.render('signUp', response.data);
	});
});

router.post('/createAccount', function(req, res, next) {
	var mutation = `
    mutation{
        addUser(
            name:"${req.body.name}",
            username:"${req.body.username}",
            password:"${req.body.password}",
            gender:"${req.body.gender}",
            email:"${req.body.email}",
            phone:${req.body.phone}
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
	graphql(schema, mutation, root).then((response) => {
		res.render('signUp/createAccount', response.data);
	});
});

module.exports = router;
