import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <div className="App">
      <ul className="gallery">
        {data.map((da, index) => (
          <Link key={da.id} to={`${da.id}`}>
            <li className="card">
              <div className="card__image">
                <img src={da.image} alt="" width={100} />
              </div>
              <div className="title">{da.title}</div>
              <div className="info">
                <span className="price">{da.price} INR</span>
                <span className="rating">{da.rating.rate}/5</span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
