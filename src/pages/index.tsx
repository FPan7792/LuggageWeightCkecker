import type { ReactElement } from "react";
import { useEffect } from "react";
import type { NextPageWithLayout } from "./_app";

import Layout from "../components/Layout/Layout";
import HeadLayer from "../components/HeadLayer/HeadLayer";
import Link from "next/link";

import useCarrierStore from "../store/Carriers/carriers_store";

import { InventoryBase } from "../components/Inventory";
import { BackPackBase } from "../components/BackPack";

const Page: NextPageWithLayout = () => {
  // CARRIER STATES
  const { isLoading } = useCarrierStore().state;

  if (isLoading) {
    // !!!Impl loader
    return <p>LOADING</p>;
  }

  return (
    <div className="flex">
      <HeadLayer />
      {/* <Link href={"/report/test"}>
        <button>Valider </button>
      </Link> */}
      <InventoryBase />
      <BackPackBase />
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
