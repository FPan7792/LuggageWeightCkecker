import { useEffect } from "react";
import useInventoryStore from "../../store/Inventory/inventory_store";

const Inventory = ({ style }: { style: string }) => {
  // INVENTORY STATES
  const {
    initializeInventoryStore,
    allInventoryItems,
    inventory,
    backPack,
    manageInventoryItems,
  } = useInventoryStore();
  const isLoadingInventory = useInventoryStore().isLoading;

  useEffect(() => {
    const displayDatas = async () => {
      await initializeInventoryStore();
    };
    displayDatas();
  }, []);

  useEffect(() => {
    console.log("INV", inventory);
    console.log("back", backPack);
  });

  if (isLoadingInventory) {
    // !!!Impl loader
    return <p>LOADING</p>;
  }

  return (
    <div className="w-[50%]">
      {allInventoryItems.map((item) => (
        <div key={item.id} onClick={() => manageInventoryItems(item)}>
          <span>{item.label}</span>
          <span>{item.status.added.toString()}</span>
        </div>
      ))}
    </div>
  );
};

export default Inventory;
