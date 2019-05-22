var express = require('express');
var router = express.Router();
var { graphql } = require('graphql');
const schema = require('../graphql/schema');
const root = require('../graphql/resolver');

router.get('/', function(req, res, next) {
	res.render('signUp', { error: false });
});

router.post('/', function(req, res, next) {
	var query = `
    query{
      allUsers {
        username
      }
    }
	`;
	graphql(schema, query, root).then((response) => {
		var userList = [];
		for (var i in response.data.allUsers) {
			userList.push(response.data.allUsers[i].username);
		}
		if (userList.includes(req.body.username)) {
			res.render('signUp', { error: true });
		} else {
			var mutation = `
            mutation{
                newUser(
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
				res.render('accountCreated', response.data);
			});
		}
	});
});

module.exports = router;
