import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { Product } from './components/Product';
import './App.css';

function App() {
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
          <Route path={"/products"} element={<Home />} />
          <Route path={"products/:id"} element={<Product />} />

        </Routes >
        <footer>
          Designed by © <a href="mailto:anantha_krishnan@outlook.com">Anantha Krishnan </a>. Education purpose only.
        </footer>
      </BrowserRouter >
    </div>
  );
}

export default App;
