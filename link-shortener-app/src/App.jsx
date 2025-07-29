import React from "react";
import { LinkProvider } from "./context/LinkContext";
import LinkInput from "./components/LinkInput";
import LinkList from "./components/LinkList";

function App() {
  return (
    <LinkProvider>
      <div style={{ padding: "2rem", fontFamily: "Arial" }}>
        <h1>🔗 Link Shortener with Expiration</h1>
        <LinkInput />
        <LinkList />
      </div>
    </LinkProvider>
  );
}

export default App;
