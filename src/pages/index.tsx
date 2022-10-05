import type { ReactElement } from "react";
import Layout from "../components/Layout/Layout";
import type { NextPageWithLayout } from "./_app";
import HeadLayer from "../components/HeadLayer/HeadLayer";
import Link from "next/link";

import { fetchCarriers } from "../../utils/fetchers";
import { useEffect } from "react";

const Page: NextPageWithLayout = () => {
  // console.log("DATAS", datas);

  useEffect(() => {
    const displayDatas = async () => {
      const datas = await fetchCarriers();
      console.log("DATAS", datas);
    };
    displayDatas();
  }, []);

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
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // const datas = await fetchCarriers();

  // console.log("DATAS", datas);
  // console.log("PP", process.env.API_KEY);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  // console.log("PE", process.env);

  return {
    props: {
      // datas,
    },
  };
}
