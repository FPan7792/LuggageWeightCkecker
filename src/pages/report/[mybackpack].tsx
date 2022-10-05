import type { ReactElement } from "react";
import Layout from "../../components/Layout/Layout";
import type { NextPageWithLayout } from "../_app";
import HeadLayer from "../../components/HeadLayer/HeadLayer";
import Link from "next/link";

const Page: NextPageWithLayout = () => {
  return (
    <div>
      {/* !!!set title and props */}
      <HeadLayer />
      <p>Bienvenue page backpack</p>
      <Link href={"/"}>
        <button>retour</button>
      </Link>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
