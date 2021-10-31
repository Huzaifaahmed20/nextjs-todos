import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ todo }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Todos</h1>
        <h3>{todo?.id}</h3>
        <h3>{todo?.title}</h3>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const rndInt = randomIntFromInterval(1, 200);

  const todo = await (
    await fetch(`https://jsonplaceholder.typicode.com/todos/${rndInt}`)
  ).json();

  return {
    props: {
      todo,
    }, // will be passed to the page component as props
  };
}
