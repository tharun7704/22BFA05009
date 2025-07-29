import React, { useEffect, useState } from "react";

const LinkItem = ({ link }) => {
  const [remaining, setRemaining] = useState(
    Math.floor((link.createdAt + link.expiresIn - Date.now()) / 1000)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "6px",
        marginBottom: "0.5rem",
      }}
    >
      <p>
        <strong>Short Link:</strong>{" "}
        <a href={link.originalUrl} target="_blank" rel="noopener noreferrer">
          {link.shortUrl}
        </a>
      </p>
      <p>
        <strong>Original:</strong> {link.originalUrl}
      </p>
      <p style={{ color: "red" }}>
        ⏳ Expires in: <strong>{remaining}s</strong>
      </p>
    </div>
  );
};

export default LinkItem;
