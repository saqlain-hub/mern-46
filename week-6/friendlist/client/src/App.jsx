import { useState } from "react";
import Homepage from "./pages/Homepage";
import EditUser from "./components/EditUser";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {
  const [friends, setFriends] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [contactInput, setContactInput] = useState("");
  const [friendsFromDb, setFriendsFromDb] = useState([]);
  const [showStatus, setShowStatus] = useState(false);

  return (
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
          />
        }
      />
      <Route path="/edit" element={EditUser} />
    </Routes>
  );
}

export default App;
