import { fetchInventory } from "../../../utils/fetchers";
import { getWeights, reduceTotalWeight } from "../../../utils/functions";
import { Item_Mutable_Object } from "./inventory_store";

/**
 * Make requests and parse datas .
 */
const initializeInventory = async (get: () => Inventory_Store_States) => {
	const { startLoading, endLoading, setupStore } = get();
	startLoading();

	const datas = (await fetchInventory()) as Datas_Inventory;
	// parse brut datas
	datas && setupStore(datas.items);

	endLoading();
};

/**
 * Distribute items into containers states on setup.
 */
const allocateEachItemsIntoContainers = (
	get: () => Inventory_Store_States,
	set: Function
) => {
	// new states to work w/
	const { allInventoryItems, inventory, backPack } = get();
	const newInventoryDatas: Item_Mutable_Object[] = [];
	const newBackPackDatas: Item_Mutable_Object[] = [];

	// distibute item considering status added
	for (const item of allInventoryItems) {
		if (item.status.added) {
			newBackPackDatas.push(item);
		} else {
			newInventoryDatas.push(item);
		}
	}

	function calculateBackPackWeigth() {
		const value = getWeights(newBackPackDatas);
		return reduceTotalWeight(value);
	}

	// update
	set({
		inventory: {
			...inventory,
			items: [...newInventoryDatas],
			totalItems: newInventoryDatas.length,
		},
		backPack: {
			...backPack,
			backPackItems: [...newBackPackDatas],
			totalItems: newBackPackDatas.length,
			totalWeight: calculateBackPackWeigth(),
		},
	});
};

/**
 * Find item and switch container .
 */
const shiftItems = (
	item: Item_Mutable_Object,
	allInventoryItems: Item_Mutable_Object[],
	newAllItems: Item_Mutable_Object[],
	set: Function
) => {
	for (const stuff of allInventoryItems) {
		if (item.id === stuff.id && item.label === stuff.label) {
			let newStuff: Item_Mutable_Object = {
				...stuff,
				status: {
					added: stuff.status.added ? false : true,
					into: stuff.status.added ? "inventory" : "backpack",
				},
			};

			const find = allInventoryItems.findIndex(
				(elem) => elem.id === stuff.id && elem.label === stuff.label
			);

			if (find !== -1) {
				newAllItems.splice(find, 1, newStuff);
				set({ allInventoryItems: newAllItems });
			} else console.log("non trouvé", find);
		}
	}
};

export { initializeInventory, allocateEachItemsIntoContainers, shiftItems };
