import { fetchCarriers } from "../../../utils/fetchers";
import { Carrier_Store } from "./carriers_store";

const initializeStore = async (get: () => Carrier_Store) => {
	const { startLoading, endLoading, setupStore, setSelectedCarrier } = get();

	startLoading();

	const datas = (await fetchCarriers()) as Datas_Carrier;

	// parse brut datas
	setupStore(datas);
	// update state
	setSelectedCarrier();

	endLoading();
};

export { initializeStore };
