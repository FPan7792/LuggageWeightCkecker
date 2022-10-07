import create from "zustand";
import { generateCarriersTable } from "../../../utils/functions";
import { initializeStore } from "./carriers_actions";
import initialState from "./carrier_states";

export interface Carrier_Mutable_Object extends Carrier {
  selected: boolean;
  id: string;
}

export interface Carrier_Store {
  state: Carrier_Store_States;
  selectedCarrier: Carrier_Mutable_Object | null;
  setupStore: (datas: Datas_Carrier) => void;
  resetStore: () => void;
  startLoading: () => void;
  endLoading: () => void;
  initializeStore: () => Promise<void>;
  setSelectedCarrier: (item?: Carrier_Mutable_Object) => void;
}

const useCarrierStore = create<Carrier_Store>((set, get) => ({
  state: { ...initialState },
  selectedCarrier: null,
  initializeStore: () => initializeStore(get),

  setupStore: async (datas: Datas_Carrier) =>
    set((prevState: Carrier_Store) => ({
      state: {
        ...prevState.state,
        allCarriers: generateCarriersTable(datas.message),
        totalCount: datas.message.length,
      },
    })),

  setSelectedCarrier: (item) => {
    const { selectedCarrier, state } = get();
    !selectedCarrier || !item
      ? set({
          selectedCarrier: state.allCarriers[0],
          state: { ...state, title: state.allCarriers[0].label },
        })
      : set({
          selectedCarrier: item,
          state: { ...state, title: item.label },
        });
  },

  resetStore: () => set(() => ({ state: initialState })),

  startLoading: () =>
    set((prevState: Carrier_Store) => ({
      state: { ...prevState.state, isLoading: true },
    })),

  endLoading: () =>
    set((prevState: Carrier_Store) => ({
      state: { ...prevState.state, isLoading: false },
    })),
}));

export default useCarrierStore;
