import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <main className="text-white flex flex-col items-center gap-16 justify-center h-[60vh]">
          <h2>This is our introduction</h2>
          <div className="about-us flex text-center gap-16">
            <section>
              <h3>We are International Commmunity</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                reiciendis aut et culpa tempora voluptatum maxime, id enim
                suscipit sed illo voluptate quasi officia soluta fuga
                reprehenderit deleniti qui dolore commodi. Aliquam vel velit
                culpa obcaecati modi voluptatem expedita dolore?
              </p>
            </section>
            <section>
              <h3>We are a Standard</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                reiciendis aut et culpa tempora voluptatum maxime, id enim
                suscipit sed illo voluptate quasi officia soluta fuga
                reprehenderit deleniti qui dolore commodi. Aliquam vel velit
                culpa obcaecati modi voluptatem expedita dolore?
              </p>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default About;
