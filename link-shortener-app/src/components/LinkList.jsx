import React from "react";
import { useLinkContext } from "../context/LinkContext";
import LinkItem from "./LinkItem";

const LinkList = () => {
  const { links } = useLinkContext();

  return (
    <div>
      {links.length === 0 ? (
        <p>No short links yet.</p>
      ) : (
        links.map((link) => <LinkItem key={link.id} link={link} />)
      )}
    </div>
  );
};

export default LinkList;
