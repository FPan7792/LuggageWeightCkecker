import create from "zustand";
import { generateInventoryTable } from "../../../utils/functions";
import {
  allocateEachItemsIntoContainers,
  initializeInventory,
  shiftItems,
} from "./inventory_actions";
import initialState from "./inventory_states";

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
    const { inventory, allInventoryItems, keepContainersUpdated } = get();

    set({
      allInventoryItems: generateInventoryTable(datas),
    });

    set({
      inventory: {
        ...inventory,
        items: { ...allInventoryItems },
        totalItems: allInventoryItems.length,
      },
    });

    keepContainersUpdated();
  },

  manageInventoryItems: (item: Item_Mutable_Object) => {
    const { allInventoryItems, keepContainersUpdated } = get();
    const newAllItems = [...allInventoryItems];

    shiftItems(item, allInventoryItems, newAllItems, set);
    keepContainersUpdated();
  },

  keepContainersUpdated: () => allocateEachItemsIntoContainers(get, set),

  resetStore: () => set(initialState),
  startLoading: () => set({ isLoading: true }),
  endLoading: () => set({ isLoading: false }),
}));

export default useInventoryStore;
