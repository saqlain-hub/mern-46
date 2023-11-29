import { useState } from "react";

function App() {
  const [friends, setFriends] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [contactInput, setContactInput] = useState("");
  const [friendsFromDb, setFriendsFromDb] = useState([]);
  const [showStatus, setShowStatus] = useState(false);

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

  const getFriends = () => {
    setFriendsFromDb([...friends]);
    console.log(friendsFromDb);
  };

  const handleDelete = () => {
    console.log("delete");
  };
  const handleEdit = () => {
    console.log("edit");
  };

  return (
    <div className="flex flex-col items-center gap-8 px-12 py-8 ">
      <h1 className="w-[700px] text-white text-center text-3xl py-2 border-b-2 border-red-400">
        Friends List CRUD
      </h1>
      <div className="flex justify-between py-12 px-12 border-gray-400 border-2 w-full">
        <section className="flex w-[550px] flex-col items-center rounded-md min-h-[300px] py-12 px-8 bg-gray-600">
          <button
            onClick={getFriends}
            className="bg-gray-300 hover:bg-gray-400"
          >
            Get Friends List
          </button>

          <ul className="flex flex-col rounded-md mt-4 w-full">
            <h3 className="py-2 border-b-2 text-white text-center bg-gray-800 rounded-md">
              Friends List
            </h3>
            {friendsFromDb.map((friend) => {
              return (
                (friend.name || friend.email) && (
                  <li className="flex items-center gap-2" key={friend.id}>
                    <div className="flex-1 text-white border-2 border-gray-300 py-4">
                      <p>Name: {friend.name}</p>
                      <p>email: {friend.email}</p>
                      <p>contact: +92-{friend.contact}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={handleDelete}
                        className="deleteBtn border-2 text-white"
                      >
                        x
                      </button>
                      <button
                        onClick={handleEdit}
                        className="editBtn border-2 text-white"
                      >
                        edit
                      </button>
                    </div>
                  </li>
                )
              );
            })}
          </ul>
        </section>
        <section className="relative">
          {showStatus && (
            <p className="absolute p-2 bg-red-400 w-full rounded-md">
              Friend Added
            </p>
          )}
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
        </section>
      </div>
    </div>
  );
}

export default App;
