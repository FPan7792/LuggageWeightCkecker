import create from "zustand";
import { initializeStore } from "./carriers_actions";

export interface Carrier_Store {
  state: Carrier_Store_States;
  setupStore: (datas: Datas_Carrier) => void;
  resetStore: () => void;
  startLoading: () => void;
  endLoading: () => void;
  initializeStore: () => Promise<void>;
}

const initialState: Carrier_Store_States = {
  title: "Airplanes",
  totalCount: 0,
  allCarriers: [],
  isLoading: false,
};

const useCarrierStore = create<Carrier_Store>((set, get) => ({
  state: { ...initialState },
  initializeStore: () => initializeStore(get),
  setupStore: async (datas: Datas_Carrier) =>
    set((prevState: Carrier_Store) => ({
      ...prevState,
      state: {
        ...prevState.state,
        allCarrier: datas.message,
        totalCount: datas.message.length,
      },
    })),
  resetStore: () =>
    set((prevState: Carrier_Store) => ({ ...prevState, state: initialState })),
  startLoading: () =>
    set((prevState: Carrier_Store) => ({
      ...prevState,
      state: { ...prevState.state, isLoading: true },
    })),
  endLoading: () =>
    set((prevState: Carrier_Store) => ({
      ...prevState,
      state: { ...prevState.state, isLoading: false },
    })),
}));

export default useCarrierStore;
