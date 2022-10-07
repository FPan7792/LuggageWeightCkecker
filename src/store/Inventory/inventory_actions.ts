import { fetchInventory } from "../../../utils/fetchers";
import { reduceTotalWeight } from "../../../utils/functions";
import { Item_Mutable_Object } from "./inventory_store";

const initializeInventory = async (get: () => Inventory_Store_States) => {
  const { startLoading, endLoading, setupStore } = get();

  startLoading();

  const datas = (await fetchInventory()) as Datas_Inventory;
  datas && setupStore(datas.items);

  endLoading();
};

const allocateEachItemsIntoContainers = (
  get: () => Inventory_Store_States,
  set: Function
) => {
  const { allInventoryItems, inventory, backPack } = get();
  const newInventoryDatas: Item_Mutable_Object[] = [];
  const newBackPackDatas: Item_Mutable_Object[] = [];

  for (const item of allInventoryItems) {
    if (item.status.added) {
      newBackPackDatas.push(item);
    } else {
      newInventoryDatas.push(item);
    }
  }

  const getWeights = () => {
    const table = [];
    for (const elem of newBackPackDatas) {
      table.push(elem.weight);
    }
    console.log("TAAAAAABLE", table);

    return table;
  };

  function getWeightFromBackPack() {
    const values = getWeights();
    return reduceTotalWeight(values);
  }

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
      totalWeight: getWeightFromBackPack(),
    },
  });
};

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

      if (find) {
        newAllItems.splice(find, 1, newStuff);
        set({ allInventoryItems: newAllItems });
      }
    }
  }
};

export { initializeInventory, allocateEachItemsIntoContainers, shiftItems };
