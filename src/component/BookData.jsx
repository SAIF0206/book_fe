import { Link } from "react-router-dom";

const BookData = ({ item }) => {
  const handleRoute = () => {
    console.log("I clicked here");
  };
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-item">
          <h1>{item.title}</h1>
          <ul>
            <li>
              <strong>Author: </strong> {item.author}
            </li>
            <li>
              <strong>Created: </strong>
              {item.content}
            </li>
            <li>
              <strong>Content: </strong>
              test
              <Link
                to={`/bookdetail/${item.id}`}
                params={item.id}
                onClick={handleRoute}
              >
                Readmore...
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookData;
