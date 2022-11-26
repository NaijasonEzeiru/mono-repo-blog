import type { NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";
import AuthContext from "../components/AuthContext";
import Hero from "../components/Hero";
import Posts from "../components/Posts";
import styles from "../styles/Home.module.css";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  // const { data, error, isLoading } = trpc.useQuery(["hello"]);
  const {user} = useContext(AuthContext)
  console.log("home" + user)
  return (
    <div className={styles.container}>
      <Head>
        <title>My blog</title>
        <meta
          name="description"
          content="Sample blog created by Chibuike Ezeiru"
        />
      </Head>
      <Hero />
      <div>{user? <h2>{user.email}</h2>: <h2>No user</h2>}</div>
      <Posts />
      {/* <div>{isLoading ? <p>Loading...</p> : <p>{JSON.stringify(data)}</p>}</div> */}
    </div>
  );
};

export default Home;
