import React, { useState, useEffect } from "react";
import UpdateModalComponent from "./updateModalComponent";
import postServices from "../services/postServices";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
export const ShowComponent = () => {
  const [posts, setPosts] = useState({});
  const fetchPosts = async () => {
    setPosts(await postServices.getPosts());
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(posts, "2023");
  const deletePost = async (id, e) => {
    var response = await postServices.deletePost(id);
    if (response.data.success === true) {
      alert(response.data.msg);
      document.getElementById(id).parentElement.parentElement.remove();
    } else {
      alert(response.data.msg);
    }
    alert(id);
  };
  return (
    <div className="App">
      <div>
        {" "}
        {posts.data !== undefined && posts.data.data.length > 0 && (
          <table>
            <thead>
              <th>Title</th>
              <th>Date</th>
              <th>Image</th>
              <th>Delete</th>
              <th>Edit</th>
            </thead>
            <tbody>
              {posts.data.data.map((post) => {
                return (
                  <tr>
                    <td>{post.title}</td>
                    <td>{post.date}</td>
                    <td id="img-td">
                      <img
                        src={
                          "http://localhost:8000/api/postImages/" + post.image
                        }
                        alt=""
                      />
                    </td>
                    <td>
                      <button
                        id={post._id}
                        onClick={(e) => deletePost(post._id, e)}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <UpdateModalComponent />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
