import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { backgroundImage } from "./assets";
function App() {
  return (
    <main style={{ backgroundImage: `url(${backgroundImage})` }} className="bg-cover bg-center">
      <Nav/>
      <section className="flex mx-auto justify-center w-full">
        <Hero/>
      </section>
    </main>
  );
}

export default App;
