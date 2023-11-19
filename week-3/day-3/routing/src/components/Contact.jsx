import Navbar from "./Navbar";
import Swal from "sweetalert2";

const Contact = () => {
  function sweetAlertPopUp() {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  const handleSubmit = function (e) {
    e.preventDefault();
    sweetAlertPopUp();
  };
  return (
    <>
      <div className="container">
        <Navbar />
        <main className="flex flex-col items-center justify-center bg-slate-500 py-12 h-[95vh]">
          <h2 className="mb-12 text-2xl text-white font-semibold border-b-[3px] w-[50%] text-center pb-4 border-red-400">
            Contact Form
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-2/4">
            <p className="input--container">
              <label htmlFor="name" className="absolute left-[-9999px]">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                required
                autoComplete="off"
              />
            </p>
            <p className="input--container">
              <label htmlFor="email" className="absolute left-[-9999px]">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                required
              />
            </p>
            <p className="input--container">
              <textarea
                name="message"
                id="message"
                className="w-full h-[80px] p-2"
              ></textarea>
            </p>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-500 text-white self-center py-2 px-4 rounded-md"
            >
              Submit
            </button>
          </form>
        </main>
      </div>
    </>
  );
};

export default Contact;
