import create from "zustand";
import { generateInventoryTable } from "../../../utils/functions";
import initialState from "./inventory_states";
import {
	allocateEachItemsIntoContainers,
	initializeInventory,
	shiftItems,
} from "./inventory_actions";

export interface Item_Mutable_Object extends Inventory_Item {
	id: string;
	status: {
		added: boolean;
		into: "backpack" | "inventory";
	};
}

const useInventoryStore = create<Inventory_Store_States>((set, get) => ({
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

	initializeInventoryStore: () => initializeInventory(get),
	setupStore: (datas: any) => {
		const { inventory } = get();
		let finalDatas = generateInventoryTable(datas);
		set({
			allInventoryItems: finalDatas,
			inventory: {
				...inventory,
				items: finalDatas,
				totalItems: finalDatas.length,
			},
			backPack: initialState.backPack,
		});
	},
	setupBackPack: () => set({ backPack: initialState.backPack }),

	manageInventoryItems: (item: Item_Mutable_Object) => {
		const { allInventoryItems, keepContainersUpToDate } = get();
		const newAllItems = [...allInventoryItems];

		shiftItems(item, allInventoryItems, newAllItems, set);
		keepContainersUpToDate();
	},

	keepContainersUpToDate: () => allocateEachItemsIntoContainers(get, set),

	startLoading: () => set({ isLoading: true }),
	endLoading: () => set({ isLoading: false }),
}));

export default useInventoryStore;
