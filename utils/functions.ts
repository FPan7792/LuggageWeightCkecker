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

// return global exploitable state from any datas
const createHandableTable = (
  tableOfBrutDatas: Carrier[] | Inventory_Item[],
  callBack: Function
): Carrier_Mutable_Object[] | Item_Mutable_Object[] => {
  const handableTable: Carrier_Mutable_Object[] | Item_Mutable_Object = [];

  for (const item of tableOfBrutDatas) {
    handableTable.push(callBack(item));
  }

  console.log("TABLE", handableTable);
  return handableTable;
};

const generateCarriersTable = (table: Carrier[]) =>
  createHandableTable(table, createCarrierObject);
const generateInventoryTable = (table: Inventory_Item[]) =>
  createHandableTable(table, createInventoryItemsObject);

const reduceTotalWeight = (tableofValues: number[]): number => {
  const initialValue = 0;
  const sumWithInitial = tableofValues.reduce(
    (previousValue: number, currentValue: number) =>
      previousValue + currentValue,
    initialValue
  );

  return sumWithInitial;
};

export { generateCarriersTable, generateInventoryTable, reduceTotalWeight };

// !!!
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
