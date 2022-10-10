import { v4 as uuidv4 } from "uuid";
import { Carrier_Mutable_Object } from "../src/store/Carriers/carriers_store";
import { Item_Mutable_Object } from "../src/store/Inventory/inventory_store";

// create exploitable carrer object
const createCarrierObject = (item: Carrier) => {
	return { ...item, selected: false, id: uuidv4() };
};
// create exploitable carrer object
const createInventoryItemsObject = (item: Inventory_Item) => {
	return {
		...item,
		id: uuidv4(),
		status: {
			added: false,
			into: "inventory",
		},
	};
};

/**
 *  return global exploitable state from any datas
 */
const createHandableTable = (
	tableOfBrutDatas: Carrier[] | Inventory_Item[],
	callBack: Function
): Carrier_Mutable_Object[] | Item_Mutable_Object[] => {
	const handableTable: Carrier_Mutable_Object[] | Item_Mutable_Object = [];

	for (const item of tableOfBrutDatas) {
		handableTable.push(callBack(item));
	}

	return handableTable;
};

const generateCarriersTable = (table: Carrier[]) =>
	createHandableTable(table, createCarrierObject);

const generateInventoryTable = (table: Inventory_Item[]) =>
	createHandableTable(table, createInventoryItemsObject);

/**
 * Calculates total weight.
 */
const reduceTotalWeight = (tableofValues: number[]): number => {
	const initialValue = 0;
	const sumWithInitial = tableofValues.reduce(
		(previousValue: number, currentValue: number) =>
			previousValue + currentValue,
		initialValue
	);

	return sumWithInitial;
};

/**
 * Gets all values from table .
 */
const getWeights = (tab: Item_Mutable_Object[]) => {
	const table = [];
	for (const elem of tab) {
		table.push(elem.weight);
	}
	return table;
};

const convertGramsInKilos = (value: number) => {
	return (value / 1000).toFixed(2);
};

export {
	generateCarriersTable,
	generateInventoryTable,
	reduceTotalWeight,
	convertGramsInKilos,
	getWeights,
};
