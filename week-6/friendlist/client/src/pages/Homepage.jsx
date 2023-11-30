import React from "react";
import ShowUsers from "../components/ShowUsers";
import AddUsers from "../components/AddUsers";

const Homepage = ({
  nameInput,
  setNameInput,
  emailInput,
  setEmailInput,
  contactInput,
  setContactInput,
  friends,
  setFriends,
  friendsFromDb,
  setFriendsFromDb,
  showStatus,
  setShowStatus,
}) => {
  return (
    <div className="flex flex-col items-center gap-8 px-12 py-8 ">
      <h1 className="w-[700px] text-white text-center text-3xl py-2 border-b-2 border-red-400">
        Friends List CRUD
      </h1>
      <div className="flex justify-between py-12 px-12 border-gray-400 border-2 w-full">
        <section className="flex w-[550px] flex-col items-center rounded-md min-h-[300px] py-12 px-8 bg-gray-600">
          <ShowUsers
            friends={friends}
            friendsFromDb={friendsFromDb}
            setFriendsFromDb={setFriendsFromDb}
          />
        </section>
        <section className="relative">
          {showStatus && (
            <p className="absolute p-2 bg-red-400 w-full rounded-md">
              Friend Added
            </p>
          )}
          <AddUsers
            nameInput={nameInput}
            setNameInput={setNameInput}
            emailInput={emailInput}
            setEmailInput={setEmailInput}
            contactInput={contactInput}
            setContactInput={setContactInput}
            friends={friends}
            setFriends={setFriends}
            setShowStatus={setShowStatus}
          />
        </section>
      </div>
    </div>
  );
};

export default Homepage;
