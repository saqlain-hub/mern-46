import Card from "./Card";
import opera from "../assets/opera.png";
import chrome from "../assets/chrome.png";
const Download = () => {
  return (
    <section className="py-20 mt-12">
      <div className="sm:w-2/3 lg:w-8/12 mx-auto px-2">
        <h1 className="text-3xl text-center text-bk-blue">
          Download the extension
        </h1>
        <p className="text-center text-bk-grey mt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
          aspernatur tempore atque quas provident nihil.
        </p>
      </div>

      <div className="container max-w-screen-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16">
        <div className="">
          <Card browserIcon={opera}></Card>
        </div>
        <div className="lg:my-8">
          <Card browserIcon={chrome}></Card>
        </div>
        <div className="lg:my-16">
          <Card browserIcon={opera}></Card>
        </div>
      </div>
    </section>
  );
};

export default Download;
