import FeatureOne from "./FeatureOne";
import FeatureTwo from "./FeatureTwo";

const Features = () => {
  return (
    <section className="bg-bk-white py-20 mt-20 lg:mt-60">
      <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 className="text-3xl text-center text-bk-blue">Features</h1>
        <p className="text-center text-bk-grey mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          suscipit tempore, nobis neque ab vero illo culpa alias officia
          commodi.
        </p>
      </div>
      <div>
        <FeatureOne>Bookmark in one click</FeatureOne>
      </div>
      <div className="lg:mt-52 mt-[8rem]">
        <FeatureTwo>Intelligent Search</FeatureTwo>
      </div>
      <div className="lg:mt-52 mt-[8rem]">
        <FeatureOne>Share your bookmarks</FeatureOne>
      </div>
    </section>
  );
};

export default Features;
