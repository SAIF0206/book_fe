import { useEffect, useState } from "react";
//import { getData } from "../services/dataServices";
import BookContainer from "./BookContainer";
import Header from "./Header";
import Search from "./Search";

import http from "../services/httpServices";
import { apiUrl } from "../config.json";
const Book = () => {
  const [items, setitems] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await http.get(`${apiUrl}`);
      setitems(data);
    };
    fetchData();
  }, []);

  let filtered = items;

  if (query) {
    filtered = filtered.filter((i) =>
      i.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <BookContainer items={filtered} />
    </div>
  );
};

export default Book;
