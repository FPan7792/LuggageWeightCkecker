import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

import Layout from "../components/Layout/Layout";
import HeadLayer from "../components/HeadLayer/HeadLayer";

import useCarrierStore from "../store/Carriers/carriers_store";

import { InventoryBase } from "../components/Inventory";
import { BackPackBase } from "../components/BackPack";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Page: NextPageWithLayout = () => {
  // CARRIER STATES
  const { isLoading } = useCarrierStore().state;

  if (isLoading) {
    // !!!Impl loader
    return <p>LOADING</p>;
  }

  return (
    <div className="xl:flex justify-center border-solid border-2 border-red-900">
      {/* <> */}
      <HeadLayer />
      <InventoryBase />
      <div className="xl:px-10 flex justify-center items-center ">
        <FontAwesomeIcon icon={faArrowRight} size="2x" />
      </div>
      <BackPackBase />
      {/* </> */}
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
