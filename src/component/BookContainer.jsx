import React from "react";
import BookData from "./BookData";

const BookContainer = ({ items }) => {
  return (
    <div className="container">
      <section className="cards">
        {items.map((item) => (
          <BookData key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
};

export default BookContainer;
