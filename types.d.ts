declare module "uuid";

// datas compagny object response from api
type Datas_Carrier = {
	status: string;
	message: Carrier[];
};

// compagny object
type Carrier = {
	label: string;
	limit: number;
};

type Carrier_Store_States = {
	title: string;
	totalCount: number;
	allCarriers: Carrier_Mutable_Object[];
	isLoading: boolean;
	mutable: boolean;
};

// inventory
type Datas_Inventory = {
	items: Inventory_Item[];
};

type Inventory_Item = {
	label: string;
	weight: number;
};

type Inventory_Store_States = {
	allInventoryItems: Item_Mutable_Object[];
	inventory: {
		title: string;
		totalItems: number;
		items: Item_Mutable_Object[];
	};
	backPack: {
		title: string;
		totalItems: number;
		totalWeight: number;
		backPackItems: Item_Mutable_Object[];
		status: { full: boolean };
	};
	isLoading: boolean;
	keepContainersUpToDate: () => void;
	initializeInventoryStore: () => Promise<void>;
	setupStore: (datas) => void;
	setupBackPack: () => void;
	manageInventoryItems: (item: Item_Mutable_Object) => void;
	startLoading: () => void;
	endLoading: () => void;
};

// api's
type API_Response = {
	data: Datas_Carrier | Datas_Inventory;
	status: number;
};

type API_Datas = Datas_Carrier | Datas_Inventory;

// for styling components w/ tailwind Lib
type TailwindCustomedStyle_Component = string | null;

type Pages = "Home" | "Report";

type Global_Store_State = {
	currentPage: Pages;
	setCurrentPage: (pageName: Pages) => void;
};
