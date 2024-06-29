'use client'
import FetchData from "./components/FetchData";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header>
        
      </Header>
    <main className="bg-white">
      <div>
      hello world!
      </div>

      <FetchData />
    </main>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
