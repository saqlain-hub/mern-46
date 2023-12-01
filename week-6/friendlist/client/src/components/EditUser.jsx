const EditUser = ({
  nameInput,
  setNameInput,
  emailInput,
  setEmailInput,
  contactInput,
  setContactInput,
  friendId,
}) => {
  const checkdata = function () {
    console.log(nameInput, emailInput, contactInput, friendId);
  };
  // const handleEdit = (e) => {
  //   e.stopPropagation();
  //   e.prevetDefault();
  //   console.log("Edit submit");
  // };

  const handleReset = function () {
    setNameInput("");
    setEmailInput("");
    setContactInput("");
    console.log("Reset");
  };

  return (
    <>
      <div className="flex flex-col items-center gap-8 px-12 py-8 ">
        <h1 className="w-[700px] text-white text-center text-3xl py-2 border-b-2 border-red-400">
          Edit a Friend's Details
        </h1>
        <form
          onSubmit={(e) => console.log("handleedit")}
          className="w-[550px] mt-4 mx-auto"
        >
          <fieldset className="flex flex-col gap-4">
            <p className="">
              <label htmlFor="name">Enter Name</label>
              <input
                onChange={(e) => setNameInput(e.target.value)}
                type="text"
                id="name"
                required
                autoComplete="off"
                placeholder="John Doe..."
                value={nameInput}
              />
            </p>
            <p className="">
              <label htmlFor="email">Enter Email</label>
              <input
                onChange={(e) => setEmailInput(e.target.value)}
                type="email"
                id="email"
                required
                autoComplete="off"
                placeholder="example@email.com"
                value={emailInput}
              />
            </p>
            <p className="">
              <label htmlFor="contact">Contact</label>
              <input
                onChange={(e) => setContactInput(e.target.value)}
                type="text"
                id="contact"
                required
                autoComplete="off"
                value={contactInput}
                placeholder="+92313344337"
              />
            </p>
          </fieldset>
          <div className="flex gap-4 px-8 mt-6 text-white">
            <button type="submit" className="hover:bg-red-400">
              Update
            </button>
            <button
              role="button"
              className="hover:bg-red-400"
              onClick={handleReset}
            >
              Reset
            </button>
            <button onClick={checkdata}>check data</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditUser;
