import React, { useState } from "react";
import postServices from "../services/postServices";
export const CreateComponent = () => {
  const [title, setTitle] = useState(" ");
  const [date, setDate] = useState(" ");
  const [file, setFile] = useState(" ");
  const [message, setMessage] = useState(" ");
  console.table(
    "title:",
    title,
    "date:",
    date,
    "file:",
    file,
    "message:",
    message
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("date", date);
    formData.append("file", file);
    formData.append("message", message);
    const response = await postServices.create(formData);
    if (response.data.success) {
      setMessage("Post created Successfully");
    } else {
      setMessage("Post not created, Try Again");
    }
    console.log(response);
    e.target.reset();
  };
  return (
    <>
      <div>
        {" "}
        <h1>MERN -- CRUD -- FORM</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Title: </label>
          <input
            type="text"
            name="title"
            placeholder="Enter Post Title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />{" "}
          <br />
          <label htmlFor="">Date:</label>
          <input
            type="date"
            name="date"
            placeholder="Enter Date"
            required
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
          <label htmlFor="">File:</label>
          <input
            type="file"
            name="file"
            placeholder="Enter Date"
            required
            onChange={(e) => setFile(e.target.files[0])}
          />
          <br />
          <label htmlFor="">Message</label>
          <input
            type="text"
            name=""
            required
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
