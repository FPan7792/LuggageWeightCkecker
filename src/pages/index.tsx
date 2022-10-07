import type { ReactElement } from "react";
import { useEffect } from "react";
import type { NextPageWithLayout } from "./_app";

import Layout from "../components/Layout/Layout";
import HeadLayer from "../components/HeadLayer/HeadLayer";
import Link from "next/link";

import useCarrierStore from "../store/Carriers/carriers_store";
import useInventoryStore from "../store/Inventory/inventory_store";

const Page: NextPageWithLayout = () => {
  // CARRIER STATES
  const { isLoading } = useCarrierStore().state;

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

  if (isLoading || isLoadingInventory) {
    // !!!Impl loader
    return <p>LOADING</p>;
  }

  return (
    <div>
      <HeadLayer />
      <Link href={"/report/test"}>
        <button>Valider </button>
      </Link>

      {allInventoryItems.map((item) => (
        <div key={item.id} onClick={() => manageInventoryItems(item)}>
          <span>{item.label}</span>
          <span>{item.status.added.toString()}</span>
        </div>
      ))}
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
