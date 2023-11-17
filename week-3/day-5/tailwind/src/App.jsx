import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Download from "./components/Download";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Download />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
