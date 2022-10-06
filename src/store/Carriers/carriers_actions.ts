import { fetchCarriers } from "../../../utils/fetchers";
import { Carrier_Store } from "./carriers_store";

const initializeStore = async (get: () => Carrier_Store) => {
  const { startLoading, endLoading, setupStore } = get();

  startLoading();

  const datas = (await fetchCarriers()) as Datas_Carrier;
  setupStore(datas);

  endLoading();
};

export { initializeStore };
// console.log("CETEST CAAA", initializeStore());
