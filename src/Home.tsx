import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";

const Home = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: 1,
          body: body,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (data.status != 201) throw new Error("Request Failed");
    } catch (err) {
      console.log(err);
      navigate("/error");
    }
  };

  return (
    <>
      <h1 id="home">Home</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div>
          <label className="form-label" htmlFor="title">
            Title:
          </label>
          <input
            type="text"
            id="title"
            className="form-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="body">
            Body:
          </label>
          <textarea
            id="body"
            className="form-textarea"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button type="submit" className="form-submit-button">
          Submit
        </button>
      </form>
    </>
  );
};

export default Home;
