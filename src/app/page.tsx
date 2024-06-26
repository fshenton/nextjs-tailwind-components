import Image from "next/image";
import s from "./home.module.scss";

export default function Home() {
  return (
    <main>
      <h1 className={s.heading}>Hello World</h1>
      <h2>My name is Frank</h2>
      <h3>How&apos;s it going? :)</h3>
    </main>
  );
}
