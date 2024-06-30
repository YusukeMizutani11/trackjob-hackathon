'use client'
import FetchData from "./components/FetchData";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header> 
      </Header>

	  <main className="flex h-screen flex-col items-center p-24">
      <FetchData />
    </main>
      <div>
        <Footer></Footer>
      </div>
      <Link href="/form" className="text-red-400">
      フォーム      </Link>
    </div>
  );
}
