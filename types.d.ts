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

type Datas_Inventory = {
  items: Inventory_Item[];
};

type Inventory_Item = {
  label: string;
  weight: number;
};

type TailwindCustomedStyle_Component = string | null;
