import type { ReactElement } from "react";
import Layout from "../components/Layout/Layout";
import type { NextPageWithLayout } from "./_app";
import HeadLayer from "../components/HeadLayer/HeadLayer";

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <HeadLayer />
      <p>Bienvenue</p>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
