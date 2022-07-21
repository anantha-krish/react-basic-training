import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link, useParams } from 'react-router-dom';

function AppDetails() {
  const { id } = useParams('id');
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/' + id)
      .then(res => res.json()).
      then(data => setProduct(data)).
      catch(err => console.error(err.message));
  }, [id]);

  return <div className='product__container'>
    {product && <ul className="product__info">
      <li className='product__category'>
        {product.category}
      </li>
      <li className='product__title'>
        {product.title}
      </li>
      <li className='product__image'>
        <img src={product.image} alt={product.title} />
      </li>
      <li>
        <span className='rating product__rating'>
          {product.rating?.rate} ({product.rating?.count})
        </span>
        <span className='price product__price'>
          {product.price}
        </span>
      </li>
      <li className='product__description'>
        {product.description}
      </li>
    </ul>}
  </div >
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
          <Route exact path="/" element={<Navigate to="/products" />} />
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
          <Route path={"products/:id"} element={<AppDetails />} />

        </Routes >
        <footer>
          Designed by © <a href="mailto:anantha_krishnan@outlook.com">Anantha Krishnan </a>. Education purpose only.
        </footer>
      </BrowserRouter >
    </div>
  );
}

export default App;
