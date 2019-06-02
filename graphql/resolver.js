var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var url = 'mongodb://localhost:27017/GuardianPRO-DB';

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	if (err) throw err;
	db.db('GuardianPRO-DB').createCollection('users', function(err, res) {
		if (err) throw err;
	});
});

module.exports = {
	allUsers: async () => {
		var getResult = () => {
			return new Promise((resolve) => {
				MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
					if (err) throw err;
					db.db('GuardianPRO-DB').collection('users').find({}).toArray(function(err, res) {
						if (err) throw err;
						db.close();
						resolve(res);
					});
				});
			});
		};
		var result = await getResult();
		return result;
	},
	users: async (input) => {
		var getResult = () => {
			return new Promise((resolve) => {
				MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
					if (err) throw err;
					db.db('GuardianPRO-DB').collection('users').find(input).toArray(function(err, res) {
						if (err) throw err;
						db.close();
						resolve(res);
					});
				});
			});
		};
		var result = await getResult();
		return result;
	},
	user: async (input) => {
		if (input._id) {
			input._id = new ObjectId(input._id);
		}
		var getResult = () => {
			return new Promise((resolve) => {
				MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
					if (err) throw err;
					db.db('GuardianPRO-DB').collection('users').findOne(input, function(err, res) {
						if (err) throw err;
						db.close();
						resolve(res);
					});
				});
			});
		};
		var result = await getResult();
		return result;
	},
	newUser: async ({ name, username, password, gender, email, phone }) => {
		var getResult = () => {
			return new Promise((resolve) => {
				MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
					if (err) throw err;
					db.db('GuardianPRO-DB').collection('users').insertOne({
						name: name,
						username: username,
						password: password,
						gender: gender,
						email: email,
						phone: phone
					}, function(err, res) {
						if (err) throw err;
						db.close();
						resolve(res.ops[0]);
					});
				});
			});
		};
		var result = await getResult();
		return result;
	}
};
