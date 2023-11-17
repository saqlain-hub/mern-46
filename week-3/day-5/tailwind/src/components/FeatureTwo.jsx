import heroImg from "../assets/hero-img.jpg";
import Button from "./Button";

const FeatureTwo = ({ children }) => {
  return (
    <>
      <div className="relative mt-20 lg:mt-24">
        <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              className="rounded-md w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-[580px] md:h-[100%]"
              src={heroImg}
              alt="hero img"
            />
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start md:mt-12 lg:mt-0">
            <h1 className="text-3xl text-bk-blue">{children}</h1>
            <p className="text-bk-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              temporibus saepe rerum hic fuga aut similique repudiandae, nihil
              officiis.
            </p>
            <Button type="button" color="purple">
              More Info
            </Button>
          </div>
        </div>
        <div className="hidden md:block bg-bk-purple rounded-l-full h-80 w-2/4 absolute right-0 top-32 lg:top-[45px] lg:right-[-150px]"></div>
      </div>
    </>
  );
};

export default FeatureTwo;
