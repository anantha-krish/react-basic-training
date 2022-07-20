import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link, useParams } from 'react-router-dom';

function AppDetails() {
  const params = useParams('id');
  return <>{params.id}</>
}

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json()).then(data => setData(data)).catch(err => console.error(err.message));
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
        <nav className="nav_bar">
          <span className="menu">
            <Link to="/products">Home</Link>
          </span>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path={"/products"} element={
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
                  </Link>))}
              </ul>
            </div >} />
          < Route path={"products/:id"} element={< AppDetails />} />

        </Routes >
        <footer>
          Designed by © <a href="mailto:anantha_krishnan@outlook.com">Anantha Krishnan </a>. Education purpose only.
        </footer>
      </BrowserRouter >
    </div>
  );
}

export default App;
