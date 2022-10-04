import type { NextPage } from "next";
import HeadLayer from "../components/HeadLayer/HeadLayer";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeadLayer />

      <>Je suis le premier composant</>
    </div>
  );
};

export default Home;
