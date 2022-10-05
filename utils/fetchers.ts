import { URLS } from "./urls/urls";
import { buildURLS } from "./urls/url_utils";
import { fetchDatasFromAPI } from "./requests";

const getDatas = async (url: string) => {
  const builtUrl = buildURLS(url);
  return fetchDatasFromAPI(builtUrl);
};

const fetchCarriers = () => getDatas(URLS.carriers_url);
const fetchInventory = () => getDatas(URLS.inventory_url);

// console.log("REQ", fetchCarriers());

export { fetchCarriers, fetchInventory };
