const AddUsers = ({
  nameInput,
  emailInput,
  contactInput,
  setNameInput,
  setEmailInput,
  setContactInput,
  friends,
  setFriends,
  setShowStatus,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const friend = {
      name: nameInput,
      email: emailInput,
      contact: contactInput,
      id: Math.random() * 1000 + 1,
    };
    setFriends([...friends, friend]);

    setShowStatus(true);
    setNameInput("");
    setEmailInput("");
    setContactInput("");

    setTimeout(() => {
      setShowStatus(false);
    }, 3000);
  };
  return (
    <form onSubmit={handleSubmit} className="w-[550px] mt-12">
      <fieldset className="flex flex-col gap-4">
        <p className="">
          <label htmlFor="name">Enter Name</label>
          <input
            onChange={(e) => setNameInput(e.target.value)}
            type="text"
            id="name"
            required
            autoComplete="off"
            autoFocus
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
            placeholder="+92313344337"
            value={contactInput}
          />
        </p>
      </fieldset>
      <div className="flex gap-4 px-8 mt-6 text-white">
        <button type="submit" className="hover:bg-red-400">
          Add
        </button>
        <button className="hover:bg-red-400" type="reset">
          Reset
        </button>
      </div>
    </form>
  );
};

export default AddUsers;
