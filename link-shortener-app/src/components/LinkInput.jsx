import React, { useState } from "react";
import { useLinkContext } from "../context/LinkContext";

const LinkInput = () => {
  const { addLink } = useLinkContext();
  const [url, setUrl] = useState("");
  const [timer, setTimer] = useState(60);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) return;
    addLink(url, timer);
    setUrl("");
    setTimer(60);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="url"
        required
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ padding: "0.5rem", marginRight: "0.5rem", width: "300px" }}
      />
      <input
        type="number"
        min="10"
        max="600"
        value={timer}
        onChange={(e) => setTimer(Number(e.target.value))}
        style={{ padding: "0.5rem", marginRight: "0.5rem", width: "80px" }}
      />
      <button type="submit" style={{ padding: "0.5rem" }}>
        Shorten
      </button>
    </form>
  );
};

export default LinkInput;
