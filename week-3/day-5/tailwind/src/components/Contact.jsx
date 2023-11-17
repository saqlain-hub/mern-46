const Contact = () => {
  return (
    <section className="bg-bk-purple text-white py-20">
      <div className="container">
        <div className="sm:w-3/4 md:w-2/4 mx-auto">
          <p className="font-light uppercase text-center mb-8">
            34,000+ ALREADY Joined
          </p>
          <h1 className="text-3xl text-center">
            Stay up-to-date with what we're doing
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <input
              type="text"
              placeholder="Enter your email address"
              className="focus:outline-none text-bk-blue flex-1 px-2 py-3 rounded-md"
            />
            <button
              type="button"
              className="btn bg-red-500  hover:bg-bk-white hover:text-black"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
