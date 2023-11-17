import botIcon from "../assets/bot-icon.png";

const FAQ = () => {
  return (
    <section className="bg-bk-white py-20">
      <div className="container">
        <div className="sm:w-2/3 lg:w-8/12 mx-auto px-2">
          <h1 className="text-3xl text-center text-bk-blue">
            Frequently Asked Questions
          </h1>
          <p className="text-center text-bk-grey mt-4">
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to contact us
          </p>
        </div>
        <div className="flex flex-col sm:w-3/4 lg:w-7/12 mt-12 mx-auto">
          <div className="flex items-center border-b py-4 cursor-pointer px-2 hover:bg-[#ccc] rounded-md">
            <span className="flex-1">What is a Bookmark?</span>
            <i className="rotate-[270deg] font-bold inline-block">&lt;</i>
          </div>
          <div className="flex items-center border-b py-4 cursor-pointer px-2 hover:bg-[#ccc] rounded-md">
            <span className="flex-1">How can I request a new browser?</span>
            <i className="rotate-[270deg] font-bold inline-block">&lt;</i>
          </div>
          <div className="flex items-center border-b py-4 cursor-pointer px-2 hover:bg-[#ccc] rounded-md">
            <span className="flex-1">Is there a mobile app?</span>
            <i className="rotate-[270deg] font-bold inline-block">&lt;</i>
          </div>
          <button
            type="button"
            className="flex self-center mt-12 btn btn-purple hover:bg-red-500 hover:text-white"
          >
            More Info
          </button>
        </div>
      </div>
      <div className="flex z-20 items-center gap-2 px-4 py-3 text-center rounded-r-xl cursor-pointer fixed top-52 bg-teal-500 text-white shadow-md shadow-teal-200">
        <p>Chat with our</p>
        <img width={40} src={botIcon} alt="bot icon" />
      </div>
    </section>
  );
};

export default FAQ;
