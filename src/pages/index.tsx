import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

import Layout from "../components/Layout/Layout";
import HeadLayer from "../components/HeadLayer/HeadLayer";
import Link from "next/link";

import useCarrierStore from "../store/Carriers/carriers_store";

const Page: NextPageWithLayout = () => {
  const { state } = useCarrierStore();
  const { isLoading } = state;

  console.log("STATE", state);

  if (isLoading) {
    // !!!Impl loader
    return <p>LOADING</p>;
  }

  return (
    <div>
      <HeadLayer />
      <p>Bienvenue page HOME</p>
      <Link href={"/report/test"}>
        <button>Valider </button>
      </Link>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;

// This function gets called at build time
export async function getServerSideProps() {
  // const datas = await fetchCarriers();

  return {
    props: {
      // test,
    },
  };
}
