import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import SearchInput from "../components/Searchinput/Searchinput.jsx";
import Head from "next/head";
import Layout from "../components/Layout/Layout.jsx";
const inter = Inter({ subsets: ["latin"] });

function Home({countries}) {
  return (
    <Layout>
      
      <div className={styles.count}>Found {countries && countries.length} countries</div>
      <SearchInput placeholder ="search by name , region and subregion" />
    </Layout>
  );
}

export default Home;

export async function getStaticProps(context) {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();

  
  return {
    props: {
      countries,
    },
  };
}
