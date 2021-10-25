import { useState, useEffect } from "react";
import { apiUrl } from "../config.json";
import http from "../services/httpServices";

const BookDetail = (props) => {
  const [item, setItem] = useState("");

  useEffect(() => {
    fetchDataById(props);
  }, []);

  async function fetchDataById(props) {
    const id = props.match.params.title;
    const { data } = await http.get(`${apiUrl}/${id}`);
    console.log(data);
    setItem(data);
  }
  return (
    <div className="d-flex flex-wrap">
      <div className="card m-5">
        <div className="card-header">{item.title}</div>
        <div className="card-body">
          <h6>Author: {item.title} </h6>
          <blockquote className="blockquote mb-0">
            <p></p>

            <footer className="blockquote-footer">
              By <cite title="Source Title">{item.title}</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
