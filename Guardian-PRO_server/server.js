var express = require('express');
var { graphql } = require('graphql');
var graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');
const root = require('./graphql/resolver');

var app = express();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Guardian-PRO";

var myobj = { name: "Company Inc", address: "Highway 37" };

MongoClient.connect(url,{ useNewUrlParser: true }, function(err, Mongo) {
	if (err) throw err;
	Mongo.db("Guardian-PRO").createCollection("users", function(err, res) {
			if (err) throw err;
			console.log("Collection created!");
	});
	Mongo.db("Guardian-PRO").collection("users").insertOne(myobj, function(err, res) {
		if (err) throw err;
		console.log("1 document inserted");
	  });
	Mongo.close();
	});

	graphql(schema, '{ users{id} }', root).then((response) => {
		console.log(response);
	  });

	app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true,
	}));
	app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));