import axios from "axios";
import "./App.css";
function App() {
  function handleGet() {
    // axios({
    //   method: "get",
    //   url: "http://localhost:3500/posts",
    //   params: {
    //     _limit: 6,
    //   },
    // })
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));

    axios
      .get("http://localhost:3500/posts?_limit=4")
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }

  function addPost() {
    // axios({
    //   method: "post",
    //   url: "http://localhost:3500/posts",
    //   data: {
    //     title: "New Post",
    //     body: "Lolor sit amet, consectetur adipisicing elit. Omnis accusamus quidem fuga, dicta nobis, repellendus animi a aliquam quas sequi dolorum, recusandae quam? Atque recusandae quidem corrupti deleniti fugit esse? In, eveniet quis saepe cumque totam sequi dicta est ipsam?",
    //   },
    // })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.error(err));

    axios
      .post("http://localhost:3500/posts", {
        title: "New Post New",
        body: "Some body",
      })
      .then((res) => console.log("data added", res.data))
      .catch((err) => console.log(err));
  }

  function putUpdatePost() {
    axios
      .put("http://localhost:3500/posts/10", {
        title: "Updated",
      })
      .then((res) => console.log("Update occur", res.data))
      .catch((err) => console.log(err));
  }

  function patchUpdatePost() {
    axios
      .patch("http://localhost:3500/posts/11", {
        title: "patch update",
      })
      .then((res) => console.log("patch update", res.data))
      .catch((err) => console.log(err));
  }

  async function deletePost() {
    const post = await axios
      .get("http://localhost:3500/posts/12")
      .then((res) => res.data)
      .catch((err) => console.log("error"));

    if (post) {
      axios
        .delete("http://localhost:3500/posts/12")
        .then((res) => console.log("Post deleted", res.data))
        .catch((err) => console.log(err));
    } else {
      console.log(`Post doesn't exist`);
    }
  }

  const getSimData = () => {
    axios
      .all([
        axios.get("http://localhost:3500/posts"),
        axios.get("http://localhost:3500/todos"),
      ])
      .then((res) => {
        console.log(res[0].data);
        console.log(res[1].data);
      })
      .catch((err) => console.log(err));
  };

  axios.interceptors.request.use(
    (config) => {
      console.log(
        `${config.method.toUpperCase()} request sent to ${config.url}`
      );
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return (
    <>
      <h2>Axios</h2>
      <div className="container flex gap-4">
        <div>
          <button
            onClick={handleGet}
            className="bg-teal-500 rounded-md py-1 px-2"
          >
            GET
          </button>
        </div>
        <div>
          <button
            onClick={addPost}
            className="bg-cyan-500 rounded-md py-1 px-2"
          >
            POST
          </button>
        </div>
        <div>
          <button
            onClick={putUpdatePost}
            className="bg-red-400 rounded-md py-1 px-2"
          >
            PUT
          </button>
        </div>
        <div>
          <button
            onClick={patchUpdatePost}
            className="bg-green-400 rounded-md py-1 px-2"
          >
            PATCH
          </button>
        </div>
        <div>
          <button
            onClick={deletePost}
            className="bg-purple-500 rounded-md py-1 px-2"
          >
            DELETE
          </button>
        </div>
        <div>
          <button
            onClick={getSimData}
            className="bg-violet-400 rounded-md py-1 px-2"
          >
            GET SIM DATA
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
