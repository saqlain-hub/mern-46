import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Test from "./components/test";

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Contact</section>
    </div>
    // <div>
    // {/* <Test />
    // <Test /> */}
    // </div>
  );
};

export default App;
