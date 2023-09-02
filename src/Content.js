import React from "react";
import ItemList from "./ItemList";

/* Functions are working cause they are paassed down to the Content.js
 through props and props drilling*/
const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {/* Ternary statement: If we have link to the items array we 
      display the Items List and if not we display "List is empty msg"*/}
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your List is empty </p>
      )}
    </main>
  );
};

export default Content;
