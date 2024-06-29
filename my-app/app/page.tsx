'use client'
import FetchData from "./components/FetchData";
import Parser from "./components/parses";

export default function Home() {
  return (
    <main className="bg-white">
      hello world
      <Parser />

      <FetchData />
    </main>
  );
}
