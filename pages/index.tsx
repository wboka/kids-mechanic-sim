import type { NextPage } from "next";
import Head from "next/head";
import Form from "../components/form";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mot's Garage</title>
        <meta name="description" content="Garage simulator for little kids" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">Mot's Garage</a>!
        </h1>

        <Form />
      </main>

      <footer className={styles.footer}>
        <a href="https://www.bokasolutions.com" target="_blank" rel="noopener">
          Website built by Wayne Boka, Web Developer
        </a>
      </footer>
    </div>
  );
};

export default Home;
