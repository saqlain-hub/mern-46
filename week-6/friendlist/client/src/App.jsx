import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-500 rounded-t-md">
      <h1 className="text-3xl py-2 border-b-2 border-gray-900">
        FriendList CRUD
      </h1>
      <div className="flex justify-between p-12">
        <section className="flex-1 border-2 border-red-500 py-4 px-6 rounded-md bg-gray-600">
          <button className="border-2 border-yellow-400 px-4 py-2 rounded-md bg-green-300 text-black">
            Get Friends List
          </button>

          <ul className="rounded-md mt-4 border-2 border-gray-300">
            <h3 className="py-2 border-b-2 border-gray-300 bg-gray-800 rounded-md">
              Friends List
            </h3>
            <li>something</li>
            <li>something</li>
            <li>something</li>
          </ul>
        </section>
        <section className="flex-1">
          <form>
            <p>
              <label htmlFor="">Enter Name</label>
              <input type="text" />
            </p>
          </form>
        </section>
      </div>
    </div>
  );
}

export default App;
