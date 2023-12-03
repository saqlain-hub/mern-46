 const [friends, setFriends] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [contactInput, setContactInput] = useState("");
  const [friendsFromDb, setFriendsFromDb] = useState([]);
  const [showStatus, setShowStatus] = useState(false);
  const [friendId, setFriendId] = useState(0);


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

<EditUser
              nameInput={nameInput}
              setNameInput={setNameInput}
              emailInput={emailInput}
              setEmailInput={setEmailInput}
              contactInput={contactInput}
              setContactInput={setContactInput}
              friendId={friendId}
            />
