import "./addFriendStyles.css";
const AddFriend = ({ addFriend }) => {
  let friend = "";
  function handleChange(e) {
    friend = e.target.value;
    console.log(friend);
  }
  return (
    <form onSubmit={(e) => addFriend(e, friend)}>
      <label htmlFor="name"></label>
      <input
        onChange={handleChange}
        className="add-friend"
        type="text"
        id="name"
        autoComplete="off"
      />
      <button className="add-btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddFriend;
