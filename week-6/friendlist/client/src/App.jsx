import { useState } from "react";
import Homepage from "./pages/Homepage";
import EditUser from "./components/EditUser";
import { Routes, Route } from "react-router-dom";

function App() {
  const [friends, setFriends] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [contactInput, setContactInput] = useState("");
  const [friendsFromDb, setFriendsFromDb] = useState([]);
  const [showStatus, setShowStatus] = useState(false);
  const [friendId, setFriendId] = useState(0);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              friends={friends}
              setFriends={setFriends}
              nameInput={nameInput}
              setNameInput={setNameInput}
              emailInput={emailInput}
              setEmailInput={setEmailInput}
              contactInput={contactInput}
              setContactInput={setContactInput}
              friendsFromDb={friendsFromDb}
              setFriendsFromDb={setFriendsFromDb}
              showStatus={showStatus}
              setShowStatus={setShowStatus}
              setFriendId={setFriendId}
            />
          }
        />
        <Route
          path="/edit"
          element={
            <EditUser
              nameInput={nameInput}
              setNameInput={setNameInput}
              emailInput={emailInput}
              setEmailInput={setEmailInput}
              contactInput={contactInput}
              setContactInput={setContactInput}
              friendId={friendId}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
