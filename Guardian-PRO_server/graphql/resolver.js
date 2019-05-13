module.exports = {
	users: () => {
		return [ { id: 1, name: 'Alvin' }, { id: 2, name: 'Kenny' } ];
	},
	user: (id) => {
		return { id: id, name: 'Kenny' };
		},

	addUser: async ({name, trainSet}) => {
		return { id: 3, name: name, icon: 'ke77y', trainSet: trainSet };
	}
};


