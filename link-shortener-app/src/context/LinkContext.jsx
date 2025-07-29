import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const LinkContext = createContext();

export const LinkProvider = ({ children }) => {
  const [links, setLinks] = useState([]);

  const addLink = (originalUrl, expireInSeconds = 60) => {
    const id = uuidv4().slice(0, 6);
    const shortUrl = `${window.location.origin}/${id}`;

    const newLink = {
      id,
      originalUrl,
      shortUrl,
      createdAt: Date.now(),
      expiresIn: expireInSeconds * 1000,
    };

    setLinks((prev) => [...prev, newLink]);

    setTimeout(() => {
      setLinks((prev) => prev.filter((l) => l.id !== id));
    }, newLink.expiresIn);
  };

  return (
    <LinkContext.Provider value={{ links, addLink }}>
      {children}
    </LinkContext.Provider>
  );
};

export const useLinkContext = () => useContext(LinkContext);
