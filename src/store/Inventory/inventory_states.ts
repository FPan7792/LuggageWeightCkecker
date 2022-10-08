const initialState = {
	allInventoryItems: [],
	inventory: {
		title: "Inventory",
		totalItems: 0,
		items: [],
	},
	backPack: {
		title: "BackPack",
		totalItems: 0,
		totalWeight: 0,
		backPackItems: [],
		status: { full: false },
	},
	isLoading: false,
};

export default initialState;
