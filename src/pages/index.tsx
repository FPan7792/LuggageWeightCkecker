import type { ReactElement } from "react";
import Layout from "../components/Layout/Layout";
import type { NextPageWithLayout } from "./_app";
import HeadLayer from "../components/HeadLayer/HeadLayer";
import Link from "next/link";

const Page: NextPageWithLayout = () => {
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
