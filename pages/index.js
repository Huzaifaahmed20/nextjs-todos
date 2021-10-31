import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ todos }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Todos</h1>
        <ul>
          {todos.map((todo) => {
            return <li key={todo?.id}>{todo?.title}</li>;
          })}
        </ul>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const todos = await (
    await fetch("https://jsonplaceholder.typicode.com/todos")
  ).json();

  return {
    props: {
      todos,
    }, // will be passed to the page component as props
  };
}
