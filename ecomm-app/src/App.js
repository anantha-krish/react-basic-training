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
    <BrowserRouter>
      <Routes>
        <Route path={"/products"} element={<div className="App">
          <ul className="gallery">
            {data.map((da, index) => <li key={da.id} className="card">
              <div className="card__image">
                <Link to={`${da.id}`}>
                  <img src={da.image} alt="" width={100} />
                </Link>
              </div>
            </li>)}
          </ul>
        </div >} />
        < Route path={"products/:id"} element={< AppDetails />} />

      </Routes >
    </BrowserRouter >
  );
}

export default App;
