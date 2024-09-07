import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { backgroundImage } from "./assets";
import Trending from "./components/Trending";
import TopSellers from "./components/TopSellers";
import Wallet from "./components/Wallet";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
function App() {
  return (
    <main style={{ backgroundImage: `url(${backgroundImage})` }} className=" immediate-background  bg-cover bg-center relative min-h-screen max-md:bg-cover">
      <Nav/>
      <div className="overflow-x-hidden">
        <section className="flex mx-auto justify-center w-full" id="myhome">
          <Hero/>
        </section>
        <section className="" id="trending">
          <Trending/>
        </section>
        <section className="sm:px-16 px-8 sm:py-24 py-12" id="topsellers">
        <h1 className="text-4xl text-slate-100 mb-6 ml-10">Top Sellers</h1>
          <TopSellers/>
        </section>
         <section className="sm:px-16 px-8 sm:py-15 py-5 grid place-content-center w-full" id="wallet">
          <Wallet/>
        </section>
        <section className="sm:px-16 px-8 sm:py-24 py-12 w-full" id="myblog">
          <Blog/>
        </section>
      </div>
      <section className=" sm:px-16 px-8 pb-8 sm:pt-24 pt-12 bg-[#3b3231]/80" id="contactus">
        <Footer/>
      </section>
    </main>
  );
}

export default App;
