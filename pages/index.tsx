import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <section>
      <div>
        <h1>김종찬 만두</h1>
      </div>
      <div>
        <span>고기만두</span>
        <span>100만원</span>
      </div>
    </section>
  );
};

export default Home;
