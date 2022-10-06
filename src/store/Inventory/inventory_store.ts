export interface Item_Mutable_Object extends Inventory_Item {
  id: string;
  status: {
    added: true;
    into: "backpack" | "inventory";
  };
}
