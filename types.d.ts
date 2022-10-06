// datas compagny object response from api
type Datas_Carrier = {
  status: string;
  message: Carrier[];
};

// compagny object
type Carrier = {
  label: string;
  limit: number;
};

type Carrier_Store_States = {
  title: string;
  totalCount: number;
  allCarriers: Carrier[];
  isLoading: boolean;
};

// inventory
type Datas_Inventory = {
  items: Inventory_Item[];
};

type Inventory_Item = {
  label: string;
  weight: number;
};

// api's
type API_Response = {
  data: Datas_Carrier | Datas_Inventory;
  status: number;
};

type API_Datas = Datas_Carrier | Datas_Inventory;

// for styling components w/ tailwind Lib
type TailwindCustomedStyle_Component = string | null;
