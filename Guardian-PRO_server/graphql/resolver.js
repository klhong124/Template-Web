var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/Guardian-Pro';

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	if (err) throw err;
	db.db('Guardian-PRO').createCollection('users', function(err, res) {
		if (err) throw err;
	});
});

module.exports = {
	allUsers: async () => {
		var getResult = () => {
			return new Promise((resolve) => {
				MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
					if (err) throw err;
					db.db('Guardian-PRO').collection('users').find({}).toArray(function(err, res) {
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
					db.db('Guardian-PRO').collection('users').find(input).toArray(function(err, res) {
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
	addUser: async ({ name, username, password, gender, email, phone }) => {
		var getResult = () => {
			return new Promise((resolve) => {
				MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
					if (err) throw err;
					db.db('Guardian-PRO').collection('users').insertOne({
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
